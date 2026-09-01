const caseModalTemplate = document.createElement("div");
caseModalTemplate.className = "case-modal";
caseModalTemplate.setAttribute("aria-hidden", "true");
caseModalTemplate.innerHTML = `
  <div class="case-modal__backdrop" data-case-modal-close></div>
  <article class="case-modal__paper" role="dialog" aria-modal="true" aria-labelledby="case-modal-title" tabindex="-1">
    <span class="case-modal__pin" aria-hidden="true"></span>
    <span class="case-modal__clip" aria-hidden="true"></span>
    <header class="case-modal__topline">
      <p><span class="case-modal__code"></span> Case Statement 01</p>
      <p class="case-modal__year"></p>
    </header>
    <p class="case-modal__label">Case Title</p>
    <h2 class="case-modal__title" id="case-modal-title"></h2>
    <div class="case-modal__rule" aria-hidden="true"></div>
    <dl class="case-modal__meta-grid">
      <div>
        <dt>Client</dt>
        <dd class="case-modal__client"></dd>
      </div>
      <div>
        <dt>Role</dt>
        <dd class="case-modal__role">Creative Direction</dd>
      </div>
      <div>
        <dt>Year</dt>
        <dd class="case-modal__year-inline"></dd>
      </div>
    </dl>
    <section class="case-modal__section case-modal__brief">
      <h3>The Brief</h3>
      <p class="case-modal__description"></p>
    </section>
    <section class="case-modal__section">
      <h3>Objective</h3>
      <p class="case-modal__objective"></p>
    </section>
    <section class="case-modal__section">
      <h3>Investigation / Process</h3>
      <ol class="case-modal__process">
        <li>Mapped the audience need, visual direction, and project constraints.</li>
        <li>Designed the main layout system and refined it through visual review.</li>
        <li>Prepared the final assets with consistent spacing, hierarchy, and tone.</li>
      </ol>
    </section>
    <section class="case-modal__section">
      <h3>Evidence</h3>
      <a class="case-modal__evidence-link" href="#" target="_blank" rel="noopener noreferrer">Open Evidence -></a>
      <div class="case-modal__evidence">
        <figure>
          <img class="case-modal__image case-modal__image--primary" src="" alt="">
        </figure>
        <figure>
          <img class="case-modal__image case-modal__image--secondary" src="" alt="">
        </figure>
      </div>
    </section>
    <section class="case-modal__section">
      <h3>The Solution</h3>
      <p class="case-modal__solution"></p>
    </section>
    <section class="case-modal__section">
      <h3>Verdict / Results</h3>
      <div class="case-modal__metrics">
        <div>
          <strong>3+</strong>
          <span>Assets</span>
        </div>
        <div>
          <strong>1</strong>
          <span>Case File</span>
        </div>
        <div>
          <strong class="case-modal__result"></strong>
          <span>Outcome</span>
        </div>
      </div>
    </section>
    <p class="case-modal__stamp">Case Closed</p>
  </article>
`;

document.body.append(caseModalTemplate);

const caseModal = caseModalTemplate;
const caseModalPaper = caseModal.querySelector(".case-modal__paper");
let lastFocusedElement = null;
let paperScrollY = 0;
let maxPaperScrollY = 0;
let touchStartY = 0;

function getCardData(card) {
  if (card.dataset.caseData) {
    return JSON.parse(card.dataset.caseData);
  }

  const image = card.querySelector(".case-card__photo");

  return {
    code: card.querySelector(".case-card__meta span:first-child")?.textContent.trim() || "",
    year: card.querySelector(".case-card__year")?.textContent.trim() || "",
    image: image?.getAttribute("src") || "",
    alt: image?.getAttribute("alt") || "",
    title: card.querySelector(".case-card__title")?.textContent.trim() || "",
    category: card.querySelector(".case-card__category")?.textContent.trim() || "",
    description: card.querySelector(".case-card__description")?.textContent.trim() || "",
    result: card.querySelector(".case-card__result")?.textContent.trim() || "",
  };
}

function setModalContent(data) {
  caseModal.querySelector(".case-modal__code").textContent = data.code;
  caseModal.querySelector(".case-modal__year").textContent = data.year;
  caseModal.querySelector(".case-modal__year-inline").textContent = data.year;
  caseModal.querySelector(".case-modal__client").textContent =
    data.client || data.category.split("-")[0]?.trim() || data.category;
  caseModal.querySelector(".case-modal__role").textContent = data.role || "Creative Direction";

  const evidenceImages = data.evidenceImages || [data.image, data.image];
  const primaryImage = caseModal.querySelector(".case-modal__image--primary");
  primaryImage.src = evidenceImages[0] || data.image;
  primaryImage.alt = data.alt;

  const secondaryImage = caseModal.querySelector(".case-modal__image--secondary");
  secondaryImage.src = evidenceImages[1] || evidenceImages[0] || data.image;
  secondaryImage.alt = data.alt;

  caseModal.querySelector(".case-modal__title").textContent = data.title;
  caseModal.querySelector(".case-modal__description").textContent = data.brief || data.description;
  caseModal.querySelector(".case-modal__objective").textContent =
    data.objective || `Create a clear creative direction for ${data.title.toLowerCase()} while keeping the output useful, polished, and easy to understand.`;

  const processList = caseModal.querySelector(".case-modal__process");
  const processItems = data.process || [
    "Mapped the audience need, visual direction, and project constraints.",
    "Designed the main layout system and refined it through visual review.",
    "Prepared the final assets with consistent spacing, hierarchy, and tone.",
  ];
  processList.innerHTML = processItems.map((item) => `<li>${item}</li>`).join("");

  caseModal.querySelector(".case-modal__solution").textContent =
    data.solution || "The final direction focused on stronger hierarchy, consistent visual rhythm, and a cleaner presentation that supports the project goal.";

  const evidenceLink = caseModal.querySelector(".case-modal__evidence-link");
  if (data.evidenceUrl) {
    evidenceLink.href = data.evidenceUrl;
    evidenceLink.hidden = false;
  } else {
    evidenceLink.hidden = true;
    evidenceLink.removeAttribute("href");
  }

  const metricCards = caseModal.querySelectorAll(".case-modal__metrics div");
  const metrics = data.metrics || [
    { value: "3+", label: "Assets" },
    { value: "1", label: "Case File" },
    { value: data.result, label: "Outcome" },
  ];
  metricCards.forEach((metricCard, index) => {
    const metric = metrics[index] || metrics[metrics.length - 1];
    metricCard.querySelector("strong").textContent = metric.value;
    metricCard.querySelector("span").textContent = metric.label;
  });
}

function openCaseModal(card) {
  lastFocusedElement = document.activeElement;
  setModalContent(getCardData(card));
  caseModal.classList.add("is-open");
  caseModal.setAttribute("aria-hidden", "false");
  paperScrollY = 0;
  document.body.classList.add("case-modal-open");
  updatePaperScrollBounds();
  setPaperScroll();
  caseModalPaper.focus();
}

function closeCaseModal() {
  caseModal.classList.remove("is-open");
  caseModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("case-modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updatePaperScrollBounds() {
  const paperRect = caseModalPaper.getBoundingClientRect();
  const viewportPadding = window.innerHeight * 0.06;
  maxPaperScrollY = Math.max(0, paperRect.height - window.innerHeight + viewportPadding * 2);
  paperScrollY = clamp(paperScrollY, 0, maxPaperScrollY);
}

function setPaperScroll() {
  caseModalPaper.style.setProperty("--case-paper-scroll-y", `${-paperScrollY}px`);
}

document.addEventListener("click", (event) => {
  const card = event.target.closest(".case-card");

  if (!card || caseModal.contains(event.target)) {
    return;
  }

  event.preventDefault();
  openCaseModal(card);
});

caseModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-case-modal-close]")) {
    closeCaseModal();
  }
});

caseModal.addEventListener("wheel", (event) => {
  if (!caseModal.classList.contains("is-open")) {
    return;
  }

  event.preventDefault();
  updatePaperScrollBounds();
  paperScrollY = clamp(paperScrollY + event.deltaY, 0, maxPaperScrollY);
  setPaperScroll();
}, { passive: false });

caseModal.addEventListener("touchstart", (event) => {
  touchStartY = event.touches[0]?.clientY || 0;
}, { passive: true });

caseModal.addEventListener("touchmove", (event) => {
  if (!caseModal.classList.contains("is-open")) {
    return;
  }

  const currentY = event.touches[0]?.clientY || touchStartY;
  const deltaY = touchStartY - currentY;
  touchStartY = currentY;

  event.preventDefault();
  updatePaperScrollBounds();
  paperScrollY = clamp(paperScrollY + deltaY, 0, maxPaperScrollY);
  setPaperScroll();
}, { passive: false });

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && caseModal.classList.contains("is-open")) {
    closeCaseModal();
  }
});

window.addEventListener("resize", () => {
  if (!caseModal.classList.contains("is-open")) {
    return;
  }

  updatePaperScrollBounds();
  setPaperScroll();
});
