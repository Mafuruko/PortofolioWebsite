const siteLoader = document.querySelector(".site-loader");
const siteLoaderSticker = document.querySelector(".site-loader__sticker");
const siteLoaderFace = document.querySelector(".site-loader__face");

function waitForPageLoad() {
  if (document.readyState === "complete") {
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    window.addEventListener("load", resolve, { once: true });
  });
}

function waitForImages() {
  const images = [...document.images];

  if (!images.length) {
    return Promise.resolve();
  }

  return Promise.allSettled(
    images.map((image) => {
      if (image.complete) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        image.addEventListener("load", resolve, { once: true });
        image.addEventListener("error", resolve, { once: true });
      });
    }),
  );
}

function waitForFonts() {
  if (!document.fonts?.ready) {
    return Promise.resolve();
  }

  return document.fonts.ready.catch(() => {});
}

function initSiteLoader() {
  if (!siteLoader) {
    return;
  }

  const customStickers = siteLoader.dataset.loaderStickers
    ?.split(",")
    .map((path) => path.trim())
    .filter(Boolean);
  const loaderStickers = customStickers?.length ? customStickers : [
    "Assets/fishsticker.webp",
    "Assets/emojisticker.webp",
    "Assets/yourdiditsticker.webp",
    "Assets/aboutme/fishsticker.webp",
    "Assets/aboutme/catsticker.webp",
    "Assets/aboutme/cloversticker.webp",
  ];
  const loaderFaces = [
    "( \u2267\u2200\u2266)\u30ce",
    "(\u2606\u2200\u2606)",
    "(\u03c3\u2267\u25bd\u2266)\u03c3",
    "(* >\u03c9<)",
    "(*\u00b4\u2200\uff40\\*)",
    "(\u3002\uff65\u00b4\u0434`\uff65\u3002)",
    "(*\u00b4\uff5e\uff40 \\*)",
  ];
  let loaderStickerIndex = 0;
  let loaderFaceIndex = 0;

  const stickerInterval = window.setInterval(() => {
    if (!siteLoaderSticker || loaderStickers.length <= 1) {
      return;
    }

    loaderStickerIndex = (loaderStickerIndex + 1) % loaderStickers.length;
    siteLoaderSticker.src = loaderStickers[loaderStickerIndex];
  }, 5000);

  const faceInterval = window.setInterval(() => {
    if (!siteLoaderFace) {
      return;
    }

    siteLoaderFace.classList.add("is-changing");

    window.setTimeout(() => {
      loaderFaceIndex = (loaderFaceIndex + 1) % loaderFaces.length;
      siteLoaderFace.textContent = loaderFaces[loaderFaceIndex];
      siteLoaderFace.classList.remove("is-changing");
      siteLoaderFace.classList.add("is-settling");

      window.setTimeout(() => {
        siteLoaderFace.classList.remove("is-settling");
      }, 520);
    }, 500);
  }, 3000);

  const minVisible = new Promise((resolve) => {
    window.setTimeout(resolve, 1600);
  });
  const maxWait = new Promise((resolve) => {
    window.setTimeout(resolve, 10000);
  });

  Promise.all([minVisible, Promise.race([Promise.all([waitForPageLoad(), waitForImages(), waitForFonts()]), maxWait])]).then(() => {
    siteLoader.classList.add("is-hidden");
    window.clearInterval(stickerInterval);
    window.clearInterval(faceInterval);

    window.setTimeout(() => {
      siteLoader.remove();
    }, 620);
  });
}

initSiteLoader();
