const caseCards = [...document.querySelectorAll(".case-card")];
const caseCardGrid = document.querySelector(".case-card-grid");
const previousButton = document.querySelector("[data-case-page-prev]");
const nextButton = document.querySelector("[data-case-page-next]");
const pageIndicator = document.querySelector("[data-case-page-indicator]");
const totalFilesLabel = document.querySelector("[data-case-total-files]");

const casePages = [
  [
    {
      code: "DSG-001",
      year: "2025",
      image: "Assets/pdd.png",
      alt: "Visual identity design case file",
      title: "Visual Identity",
      category: "Brand System - Design",
      description: "A compact identity direction built from consistent color, type, layout, and asset rules.",
      result: "Brand System",
    },
    {
      code: "DSG-002",
      year: "2025",
      image: "Assets/kabirobranding.png",
      alt: "Social media layout design case file",
      title: "Social Layout",
      category: "Publication - Template",
      description: "A reusable feed layout system for keeping visual content structured, readable, and consistent.",
      result: "Template Kit",
    },
    {
      code: "DSG-003",
      year: "2024",
      image: "Assets/contentcreator.png",
      alt: "Poster direction design case file",
      title: "Poster Direction",
      category: "Campaign - Visual Design",
      description: "Poster compositions focused on stronger hierarchy, clearer messaging, and expressive visuals.",
      result: "Composed",
    },
  ],
  [
    {
      code: "DSG-004",
      year: "2025",
      image: "Assets/pdd.png",
      alt: "Brand kit design case file",
      title: "Brand Kit",
      category: "Identity - Assets",
      description: "A practical set of visual components for keeping event and organization materials aligned.",
      result: "Packaged",
    },
    {
      code: "DSG-005",
      year: "2024",
      image: "Assets/kabirobranding.png",
      alt: "Motion poster design case file",
      title: "Motion Poster",
      category: "Motion - Social Media",
      description: "A poster concept adapted into moving visuals for a more dynamic social media presentation.",
      result: "Animated",
    },
    {
      code: "DSG-006",
      year: "2024",
      image: "Assets/contentcreator.png",
      alt: "Carousel design case file",
      title: "Carousel Pack",
      category: "Editorial - Layout",
      description: "A slide-based visual system that balances information, rhythm, and clean composition.",
      result: "Published",
    },
  ],
  [
    {
      code: "DSG-007",
      year: "2026",
      image: "Assets/pdd.png",
      alt: "Editorial layout case file",
      title: "Editorial Layout",
      category: "Print - Digital",
      description: "A grid-led layout exploration for long-form information with strong visual pacing.",
      result: "Laid Out",
    },
    {
      code: "DSG-008",
      year: "2025",
      image: "Assets/kabirobranding.png",
      alt: "Logo study case file",
      title: "Logo Study",
      category: "Identity - Exploration",
      description: "A symbol and type exploration focused on recognizability, balance, and flexible use.",
      result: "Explored",
    },
    {
      code: "DSG-009",
      year: "2025",
      image: "Assets/contentcreator.png",
      alt: "Thumbnail design case file",
      title: "Thumbnail Pack",
      category: "Content - Visual Hook",
      description: "A thumbnail direction made to improve clarity, contrast, and first-look attention.",
      result: "Ready",
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
