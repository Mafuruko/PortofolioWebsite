const viewport = document.querySelector(".viewport");
const world = document.querySelector(".canvas-world");
const aboutCard = document.querySelector(".about-card");
const stickyNote = document.querySelector(".sticky-note");
const stapler = document.querySelector(".tool-cluster__stapler");
const pencil = document.querySelector(".tool-cluster__pencil");
const eraser = document.querySelector(".tool-cluster__eraser");
const plantPot = document.querySelector(".plant-pot");
const rulerEdge = document.querySelector(".ruler-edge");
const scissorsCorner = document.querySelector(".scissors-corner");
const introNote = document.querySelector(".intro-note");
const heroCard = document.querySelector(".hero-card");
const stickers = [...document.querySelectorAll(".sticker")];
const BASE_SCALE = 0.62;
const MAX_SCALE = 1.45;

const state = {
  pointerX: window.innerWidth / 2,
  pointerY: window.innerHeight / 2,
  x: 0,
  y: 0,
  targetX: 0,
  targetY: 0,
  scale: BASE_SCALE,
  targetScale: BASE_SCALE,
  dragging: false,
  dragX: 0,
  dragY: 0,
  lastX: 0,
  lastY: 0,
  velocityX: 0,
  velocityY: 0,
};

let lastFrameTime = 0;
let lastDragTime = 0;
let lastDragX = 0;
let lastDragY = 0;
let animationFrameId = 0;
let stickerAnimationFrameId = 0;
let pointerDirty = true;
let boardWidth = 0;
let boardHeight = 0;
let activeSticker = null;
const stickerStates = new Map();

function refreshBoardSize() {
  boardWidth = world.offsetWidth;
  boardHeight = world.offsetHeight;
}

function requestFrame() {
  if (!animationFrameId) {
    animationFrameId = requestAnimationFrame(animate);
  }
}

function frameFactor(dtMs) {
  return dtMs / (1000 / 60);
}

function dampen(rate, dtFactor) {
  return 1 - Math.pow(1 - rate, dtFactor);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function parseDeg(value) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function rotatePoint(point, angleDeg) {
  const angle = (angleDeg * Math.PI) / 180;
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);

  return {
    x: point.x * cos - point.y * sin,
    y: point.x * sin + point.y * cos,
  };
}

function getWorldPoint(clientX, clientY) {
  const rect = world.getBoundingClientRect();

  return {
    x: (clientX - rect.left) / state.scale,
    y: (clientY - rect.top) / state.scale,
  };
}

function getStickerCenter(sticker) {
  const worldRect = world.getBoundingClientRect();
  const stickerRect = sticker.getBoundingClientRect();

  return {
    x: (stickerRect.left + stickerRect.width / 2 - worldRect.left) / state.scale,
    y: (stickerRect.top + stickerRect.height / 2 - worldRect.top) / state.scale,
  };
}

function setStickerTransform(stickerState) {
  stickerState.element.style.setProperty("--sticker-x", `${stickerState.x}px`);
  stickerState.element.style.setProperty("--sticker-y", `${stickerState.y}px`);
  stickerState.element.style.setProperty("--sticker-rotate", `${stickerState.rotation}deg`);
}

function clampStickerToBoard(stickerState, bounce = 0.25) {
  const board = getBoardSize();
  const radius = Math.hypot(stickerState.element.offsetWidth, stickerState.element.offsetHeight) / 2;
  const minX = radius;
  const maxX = board.width - radius;
  const minY = radius;
  const maxY = board.height - radius;
  let centerX = stickerState.originCenterX + stickerState.x;
  let centerY = stickerState.originCenterY + stickerState.y;
  let hitEdge = false;

  if (centerX < minX) {
    centerX = minX;
    stickerState.velocityX = Math.abs(stickerState.velocityX) * bounce;
    hitEdge = true;
  } else if (centerX > maxX) {
    centerX = maxX;
    stickerState.velocityX = -Math.abs(stickerState.velocityX) * bounce;
    hitEdge = true;
  }

  if (centerY < minY) {
    centerY = minY;
    stickerState.velocityY = Math.abs(stickerState.velocityY) * bounce;
    hitEdge = true;
  } else if (centerY > maxY) {
    centerY = maxY;
    stickerState.velocityY = -Math.abs(stickerState.velocityY) * bounce;
    hitEdge = true;
  }

  stickerState.x = centerX - stickerState.originCenterX;
  stickerState.y = centerY - stickerState.originCenterY;

  if (hitEdge) {
    stickerState.angularVelocity *= 0.72;
  }
}

function getStickerState(sticker) {
  if (stickerStates.has(sticker)) {
    return stickerStates.get(sticker);
  }

  const computed = getComputedStyle(sticker);
  const stickerState = {
    element: sticker,
    x: 0,
    y: 0,
    originCenterX: 0,
    originCenterY: 0,
    rotation: 0,
    baseRotation: parseDeg(computed.getPropertyValue("--sticker-base-rotate")),
    velocityX: 0,
    velocityY: 0,
    angularVelocity: 0,
    localGrabX: 0,
    localGrabY: 0,
    lastPointerX: 0,
    lastPointerY: 0,
    lastMoveTime: 0,
    dragging: false,
  };

  stickerStates.set(sticker, stickerState);
  return stickerState;
}

function updatePointer(event) {
  state.pointerX = event.clientX;
  state.pointerY = event.clientY;
  pointerDirty = true;
  requestFrame();
}

function getBoardSize() {
  if (!boardWidth || !boardHeight) {
    refreshBoardSize();
  }

  return {
    width: boardWidth,
    height: boardHeight,
  };
}

function getMinScale() {
  const board = getBoardSize();
  const fitWidth = window.innerWidth / board.width;
  const fitHeight = window.innerHeight / board.height;

  return Math.max(fitWidth, fitHeight) * 1.01;
}

function getInitialScale() {
  return Math.max(BASE_SCALE, getMinScale());
}

function getBoardBounds(scale = state.scale) {
  const board = getBoardSize();
  const width = board.width * scale;
  const height = board.height * scale;
  const maxX = Math.max(0, (width - window.innerWidth) / 2);
  const maxY = Math.max(0, (height - window.innerHeight) / 2);

  return { maxX, maxY };
}

function clampTarget() {
  const { maxX, maxY } = getBoardBounds(state.targetScale);
  state.targetX = clamp(state.targetX, -maxX, maxX);
  state.targetY = clamp(state.targetY, -maxY, maxY);
}

function setWorldTransform() {
  world.style.transform = `translate3d(calc(-50% + ${state.x}px), calc(-50% + ${state.y}px), 0) scale(${state.scale})`;

  if (!pointerDirty) {
    return;
  }

  pointerDirty = false;

  if (introNote) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const parallaxX = ((state.pointerX - centerX) / centerX) * 12;
    const parallaxY = ((state.pointerY - centerY) / centerY) * 10;

    introNote.style.setProperty("--parallax-x", `${parallaxX}px`);
    introNote.style.setProperty("--parallax-y", `${parallaxY}px`);
  }

  if (stickyNote) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const parallaxX = ((state.pointerX - centerX) / centerX) * 6;
    const parallaxY = ((state.pointerY - centerY) / centerY) * 4;

    stickyNote.style.setProperty("--sticky-parallax-x", `${parallaxX}px`);
    stickyNote.style.setProperty("--sticky-parallax-y", `${parallaxY}px`);
  }

  if (aboutCard) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const parallaxX = ((state.pointerX - centerX) / centerX) * 7;
    const parallaxY = ((state.pointerY - centerY) / centerY) * 5;

    aboutCard.style.setProperty("--about-parallax-x", `${parallaxX}px`);
    aboutCard.style.setProperty("--about-parallax-y", `${parallaxY}px`);
  }

  if (stapler || pencil || eraser) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const pointerX = (state.pointerX - centerX) / centerX;
    const pointerY = (state.pointerY - centerY) / centerY;

    if (stapler) {
      stapler.style.setProperty("--stapler-parallax-x", `${pointerX * 3}px`);
      stapler.style.setProperty("--stapler-parallax-y", `${pointerY * 2}px`);
    }

    if (pencil) {
      pencil.style.setProperty("--pencil-parallax-x", `${pointerX * 6}px`);
      pencil.style.setProperty("--pencil-parallax-y", `${pointerY * 5}px`);
    }

    if (eraser) {
      eraser.style.setProperty("--eraser-parallax-x", `${pointerX * 4}px`);
      eraser.style.setProperty("--eraser-parallax-y", `${pointerY * 3}px`);
    }
  }

  if (heroCard) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const parallaxX = ((state.pointerX - centerX) / centerX) * -8;
    const parallaxY = ((state.pointerY - centerY) / centerY) * -6;

    heroCard.style.setProperty("--hero-parallax-x", `${parallaxX}px`);
    heroCard.style.setProperty("--hero-parallax-y", `${parallaxY}px`);
  }

  if (plantPot) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const parallaxX = ((state.pointerX - centerX) / centerX) * -6;
    const parallaxY = ((state.pointerY - centerY) / centerY) * -5;

    plantPot.style.setProperty("--plant-parallax-x", `${parallaxX}px`);
    plantPot.style.setProperty("--plant-parallax-y", `${parallaxY}px`);
  }

  if (rulerEdge) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const parallaxX = ((state.pointerX - centerX) / centerX) * -4;
    const parallaxY = ((state.pointerY - centerY) / centerY) * 4;

    rulerEdge.style.setProperty("--ruler-parallax-x", `${parallaxX}px`);
    rulerEdge.style.setProperty("--ruler-parallax-y", `${parallaxY}px`);
  }

  if (scissorsCorner) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const parallaxX = ((state.pointerX - centerX) / centerX) * -5;
    const parallaxY = ((state.pointerY - centerY) / centerY) * 5;

    scissorsCorner.style.setProperty("--scissors-parallax-x", `${parallaxX}px`);
    scissorsCorner.style.setProperty("--scissors-parallax-y", `${parallaxY}px`);
  }
}

function animate(now) {
  animationFrameId = 0;

  const dtMs = lastFrameTime
    ? clamp(now - lastFrameTime, 0, 48)
    : 1000 / 60;
  lastFrameTime = now;
  const dtFactor = frameFactor(dtMs);

  if (!state.dragging) {
    const hasMomentum = Math.abs(state.velocityX) > 0.02 || Math.abs(state.velocityY) > 0.02;

    if (hasMomentum) {
      state.targetX += state.velocityX * dtFactor;
      state.targetY += state.velocityY * dtFactor;
      const friction = Math.pow(0.91, dtFactor);
      state.velocityX *= friction;
      state.velocityY *= friction;
    } else {
      state.velocityX = 0;
      state.velocityY = 0;

      const edge = 0.16;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deadZoneX = window.innerWidth * edge;
      const deadZoneY = window.innerHeight * edge;
      const offsetX = state.pointerX - centerX;
      const offsetY = state.pointerY - centerY;

      if (Math.abs(offsetX) > deadZoneX) {
        const strength = (Math.abs(offsetX) - deadZoneX) / (centerX - deadZoneX);
        state.targetX -= Math.sign(offsetX) * Math.pow(strength, 1.25) * 15 * dtFactor;
      }

      if (Math.abs(offsetY) > deadZoneY) {
        const strength = (Math.abs(offsetY) - deadZoneY) / (centerY - deadZoneY);
        state.targetY -= Math.sign(offsetY) * Math.pow(strength, 1.25) * 15 * dtFactor;
      }
    }
  }

  clampTarget();
  state.scale += (state.targetScale - state.scale) * dampen(0.065, dtFactor);
  state.x += (state.targetX - state.x) * dampen(0.26, dtFactor);
  state.y += (state.targetY - state.y) * dampen(0.26, dtFactor);

  setWorldTransform();

  const transformMoving =
    Math.abs(state.targetX - state.x) > 0.05 ||
    Math.abs(state.targetY - state.y) > 0.05 ||
    Math.abs(state.targetScale - state.scale) > 0.0001;
  const hasMomentum = Math.abs(state.velocityX) > 0.02 || Math.abs(state.velocityY) > 0.02;

  if (state.dragging || transformMoving || hasMomentum || pointerDirty) {
    requestFrame();
  } else {
    lastFrameTime = 0;
  }
}

function requestStickerFrame() {
  if (!stickerAnimationFrameId) {
    stickerAnimationFrameId = requestAnimationFrame(animateStickers);
  }
}

function animateStickers() {
  stickerAnimationFrameId = 0;
  let stillMoving = false;

  stickerStates.forEach((stickerState) => {
    if (stickerState.dragging) {
      stillMoving = true;
      return;
    }

    const moving =
      Math.abs(stickerState.velocityX) > 0.03 ||
      Math.abs(stickerState.velocityY) > 0.03 ||
      Math.abs(stickerState.angularVelocity) > 0.02;

    if (!moving) {
      stickerState.velocityX = 0;
      stickerState.velocityY = 0;
      stickerState.angularVelocity = 0;
      return;
    }

    stickerState.x += stickerState.velocityX;
    stickerState.y += stickerState.velocityY;
    stickerState.rotation += stickerState.angularVelocity;
    clampStickerToBoard(stickerState);
    stickerState.velocityX *= 0.9;
    stickerState.velocityY *= 0.9;
    stickerState.angularVelocity *= 0.94;
    setStickerTransform(stickerState);
    stillMoving = true;
  });

  if (stillMoving) {
    requestStickerFrame();
  }
}

function beginStickerDrag(event) {
  const sticker = event.currentTarget;
  const stickerState = getStickerState(sticker);
  const pointer = getWorldPoint(event.clientX, event.clientY);
  const center = getStickerCenter(sticker);
  const totalRotation = stickerState.baseRotation + stickerState.rotation;
  const grabOffset = {
    x: pointer.x - center.x,
    y: pointer.y - center.y,
  };
  const localGrab = rotatePoint(grabOffset, -totalRotation);

  event.preventDefault();
  event.stopPropagation();
  updatePointer(event);

  stickerState.originCenterX = center.x - stickerState.x;
  stickerState.originCenterY = center.y - stickerState.y;
  stickerState.localGrabX = localGrab.x;
  stickerState.localGrabY = localGrab.y;
  stickerState.lastPointerX = pointer.x;
  stickerState.lastPointerY = pointer.y;
  stickerState.lastMoveTime = performance.now();
  stickerState.velocityX = 0;
  stickerState.velocityY = 0;
  stickerState.angularVelocity = 0;
  stickerState.dragging = true;
  activeSticker = stickerState;

  sticker.classList.add("is-dragging");
  sticker.setPointerCapture(event.pointerId);
  requestStickerFrame();
}

function moveSticker(event) {
  if (!activeSticker || !activeSticker.dragging) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  updatePointer(event);

  const pointer = getWorldPoint(event.clientX, event.clientY);
  const now = performance.now();
  const dt = Math.max(now - activeSticker.lastMoveTime, 1);
  const dx = pointer.x - activeSticker.lastPointerX;
  const dy = pointer.y - activeSticker.lastPointerY;
  const currentCenter = {
    x: activeSticker.originCenterX + activeSticker.x,
    y: activeSticker.originCenterY + activeSticker.y,
  };
  const radius = {
    x: pointer.x - currentCenter.x,
    y: pointer.y - currentCenter.y,
  };
  const radiusLengthSq = Math.max(radius.x * radius.x + radius.y * radius.y, 900);
  const angularDelta = ((radius.x * dy - radius.y * dx) / radiusLengthSq) * (180 / Math.PI);
  const velocityScale = (1000 / 60) / dt;

  activeSticker.angularVelocity = activeSticker.angularVelocity * 0.55 + angularDelta * velocityScale * 0.45;
  activeSticker.rotation += angularDelta;

  const rotatedGrab = rotatePoint(
    {
      x: activeSticker.localGrabX,
      y: activeSticker.localGrabY,
    },
    activeSticker.baseRotation + activeSticker.rotation,
  );
  const nextCenter = {
    x: pointer.x - rotatedGrab.x,
    y: pointer.y - rotatedGrab.y,
  };

  activeSticker.velocityX = activeSticker.velocityX * 0.55 + (nextCenter.x - currentCenter.x) * velocityScale * 0.45;
  activeSticker.velocityY = activeSticker.velocityY * 0.55 + (nextCenter.y - currentCenter.y) * velocityScale * 0.45;
  activeSticker.x = nextCenter.x - activeSticker.originCenterX;
  activeSticker.y = nextCenter.y - activeSticker.originCenterY;
  clampStickerToBoard(activeSticker, 0.08);
  activeSticker.lastPointerX = pointer.x;
  activeSticker.lastPointerY = pointer.y;
  activeSticker.lastMoveTime = now;

  setStickerTransform(activeSticker);
  requestStickerFrame();
}

function endStickerDrag(event) {
  if (!activeSticker) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  activeSticker.dragging = false;
  activeSticker.element.classList.remove("is-dragging");

  if (event.currentTarget.hasPointerCapture?.(event.pointerId)) {
    event.currentTarget.releasePointerCapture(event.pointerId);
  }

  activeSticker = null;
  requestStickerFrame();
}

viewport.addEventListener("pointermove", (event) => {
  updatePointer(event);

  if (!state.dragging) {
    return;
  }

  const dx = event.clientX - state.dragX;
  const dy = event.clientY - state.dragY;
  state.targetX = state.lastX + dx;
  state.targetY = state.lastY + dy;
  clampTarget();

  const now = performance.now();
  const dt = Math.max(now - lastDragTime, 1);
  const instVelX = ((event.clientX - lastDragX) / dt) * (1000 / 60);
  const instVelY = ((event.clientY - lastDragY) / dt) * (1000 / 60);

  state.velocityX = state.velocityX * 0.7 + instVelX * 0.3;
  state.velocityY = state.velocityY * 0.7 + instVelY * 0.3;
  lastDragTime = now;
  lastDragX = event.clientX;
  lastDragY = event.clientY;
});

viewport.addEventListener("pointerdown", (event) => {
  if (event.target.closest("button, a, .sticker")) {
    return;
  }

  updatePointer(event);
  state.dragging = true;
  state.velocityX = 0;
  state.velocityY = 0;
  state.dragX = event.clientX;
  state.dragY = event.clientY;
  state.lastX = state.targetX;
  state.lastY = state.targetY;
  lastDragTime = performance.now();
  lastDragX = event.clientX;
  lastDragY = event.clientY;
  viewport.setPointerCapture(event.pointerId);
  requestFrame();
});

viewport.addEventListener("pointerup", (event) => {
  state.dragging = false;
  viewport.releasePointerCapture(event.pointerId);

  if (performance.now() - lastDragTime > 80) {
    state.velocityX = 0;
    state.velocityY = 0;
  }

  requestFrame();
});

viewport.addEventListener("pointercancel", () => {
  state.dragging = false;
  state.velocityX = 0;
  state.velocityY = 0;
});

viewport.addEventListener("wheel", (event) => {
  event.preventDefault();

  const oldScale = state.targetScale;
  const minScale = getMinScale();
  const zoomIntensity = event.ctrlKey ? 0.0026 : 0.0011;
  const deltaY = clamp(event.deltaY, -100, 100);
  const zoom = Math.exp(-deltaY * zoomIntensity);
  const nextScale = clamp(oldScale * zoom, minScale, MAX_SCALE);
  const scaleChange = nextScale / oldScale;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const pointerOffsetX = event.clientX - centerX;
  const pointerOffsetY = event.clientY - centerY;

  state.targetX = pointerOffsetX - (pointerOffsetX - state.targetX) * scaleChange;
  state.targetY = pointerOffsetY - (pointerOffsetY - state.targetY) * scaleChange;
  state.targetScale = nextScale;
  clampTarget();
  requestFrame();
}, { passive: false });

stickers.forEach((sticker) => {
  getStickerState(sticker);
  sticker.addEventListener("pointerdown", beginStickerDrag);
  sticker.addEventListener("pointermove", moveSticker);
  sticker.addEventListener("pointerup", endStickerDrag);
  sticker.addEventListener("pointercancel", endStickerDrag);
});

window.addEventListener("resize", () => {
  refreshBoardSize();
  state.pointerX = window.innerWidth / 2;
  state.pointerY = window.innerHeight / 2;
  state.targetScale = Math.max(state.targetScale, getInitialScale());
  clampTarget();
  pointerDirty = true;
  requestFrame();
});

refreshBoardSize();
state.scale = getInitialScale();
state.targetScale = state.scale;
requestFrame();
