const caseCards = [...document.querySelectorAll(".case-card")];
const caseCardGrid = document.querySelector(".case-card-grid");
const previousButton = document.querySelector("[data-case-page-prev]");
const nextButton = document.querySelector("[data-case-page-next]");
const pageIndicator = document.querySelector("[data-case-page-indicator]");
const totalFilesLabel = document.querySelector("[data-case-total-files]");

const casePages = [
  [
    {
      code: "WEB-001",
      year: "2026",
      image: "Assets/contentcreator.png",
      alt: "Portfolio table website case file",
      title: "Portfolio Table",
      category: "Interactive Web - Portfolio",
      description: "A draggable desk-style portfolio with zoom, canvas movement, and handcrafted visual objects.",
      result: "Interactive",
    },
    {
      code: "WEB-002",
      year: "2025",
      image: "Assets/pdd.png",
      alt: "Landing page design case file",
      title: "Landing Page",
      category: "UI Design - Conversion",
      description: "A focused page structure for communicating value quickly with clear sections and direct actions.",
      result: "Responsive",
    },
    {
      code: "WEB-003",
      year: "2025",
      image: "Assets/kabirobranding.png",
      alt: "Dashboard interface case file",
      title: "Dashboard UI",
      category: "Interface - Management",
      description: "A clean dashboard concept for organizing information, actions, and status into readable panels.",
      result: "Structured",
    },
  ],
  [
    {
      code: "WEB-004",
      year: "2025",
      image: "Assets/contentcreator.png",
      alt: "Registration flow case file",
      title: "Registration Flow",
      category: "UX Flow - Form",
      description: "A simplified flow designed to reduce steps, clarify input, and make registration less tiring.",
      result: "Improved UX",
    },
    {
      code: "WEB-005",
      year: "2024",
      image: "Assets/pdd.png",
      alt: "Archive website case file",
      title: "Archive System",
      category: "Web App - Collection",
      description: "A browsing structure for organizing project records into searchable and readable file groups.",
      result: "Archived",
    },
    {
      code: "WEB-006",
      year: "2024",
      image: "Assets/kabirobranding.png",
      alt: "Contact interface case file",
      title: "Contact Interface",
      category: "UI Component - Contact",
      description: "A contact card interface with clear actions, recognizable labels, and tactile visual feedback.",
      result: "Clickable",
    },
  ],
  [
    {
      code: "WEB-007",
      year: "2026",
      image: "Assets/contentcreator.png",
      alt: "Responsive canvas case file",
      title: "Mobile Canvas",
      category: "Responsive - Interaction",
      description: "A zoomable canvas experience tuned for smaller screens, touch input, and controlled bounds.",
      result: "Adaptive",
    },
    {
      code: "WEB-008",
      year: "2025",
      image: "Assets/pdd.png",
      alt: "Case file UI case file",
      title: "Case File UI",
      category: "Interface - Portfolio",
      description: "A portfolio section built around folders, file cards, side bookmarks, and evidence-style pages.",
      result: "Filed",
    },
    {
      code: "WEB-009",
      year: "2025",
      image: "Assets/kabirobranding.png",
      alt: "Micro interaction case file",
      title: "Micro Motion",
      category: "Interaction - Feedback",
      description: "Small hover and click details that make static portfolio objects feel responsive and alive.",
      result: "Animated",
    },
  ],
];

let currentPage = 0;
let isPaging = false;

if (totalFilesLabel) {
  const totalFiles = casePages.reduce((total, page) => total + page.length, 0);
  totalFilesLabel.textContent = `${totalFiles} Files Recorded`;
}

function setCardContent(card, data) {
  card.querySelector(".case-card__meta span:first-child").textContent = data.code;
  card.querySelector(".case-card__year").textContent = data.year;

  const image = card.querySelector(".case-card__photo");
  image.src = data.image;
  image.alt = data.alt;

  card.querySelector(".case-card__title").textContent = data.title;
  card.querySelector(".case-card__category").textContent = data.category;
  card.querySelector(".case-card__description").textContent = data.description;
  card.querySelector(".case-card__result").textContent = data.result;
}

function renderCasePage() {
  casePages[currentPage].forEach((caseData, index) => {
    setCardContent(caseCards[index], caseData);
  });

  pageIndicator.textContent = `${currentPage + 1}/${casePages.length}`;
}

function setPage(nextPage, direction) {
  if (isPaging || nextPage === currentPage) {
    return;
  }

  isPaging = true;
  const exitClass = direction === "next" ? "is-carousel-exit-left" : "is-carousel-exit-right";
  const enterClass = direction === "next" ? "is-carousel-enter-right" : "is-carousel-enter-left";

  caseCardGrid.classList.remove("is-carousel-enter-left", "is-carousel-enter-right");
  caseCardGrid.classList.add(exitClass);

  window.setTimeout(() => {
    currentPage = nextPage;
    renderCasePage();

    caseCardGrid.classList.remove(exitClass);
    caseCardGrid.classList.add("is-carousel-prep", enterClass);
    caseCardGrid.offsetHeight;
    caseCardGrid.classList.remove("is-carousel-prep");

    window.setTimeout(() => {
      caseCardGrid.classList.remove(enterClass);
    }, 560);
  }, 260);

  window.setTimeout(() => {
    isPaging = false;
  }, 720);
}

previousButton.addEventListener("click", () => {
  setPage((currentPage - 1 + casePages.length) % casePages.length, "prev");
});

nextButton.addEventListener("click", () => {
  setPage((currentPage + 1) % casePages.length, "next");
});

renderCasePage();
