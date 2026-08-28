const caseCards = [...document.querySelectorAll(".case-card")];
const caseCardGrid = document.querySelector(".case-card-grid");
const previousButton = document.querySelector("[data-case-page-prev]");
const nextButton = document.querySelector("[data-case-page-next]");
const pageIndicator = document.querySelector("[data-case-page-indicator]");
const totalFilesLabel = document.querySelector("[data-case-total-files]");

const casePages = [
  [
    {
      code: "CC-001",
      year: "2025",
      image: "Assets/contentcreator.png",
      alt: "Content creator project documentation",
      title: "Content Strategy",
      category: "Schematics ITS - Content Creation",
      description: "Campaign planning, social media storytelling, and production for event engagement.",
      result: "Audience Growth",
    },
    {
      code: "CC-002",
      year: "2025",
      image: "Assets/pdd.png",
      alt: "Publication design and documentation project",
      title: "PDD Campaign",
      category: "ITS x Forda - Documentation",
      description: "Visual documentation workflow with clean publication assets and organized content output.",
      result: "Case Closed",
    },
    {
      code: "CC-003",
      year: "2024",
      image: "Assets/kabirobranding.png",
      alt: "Branding bureau documentation",
      title: "Branding Bureau",
      category: "ITS Student Choir - Branding",
      description: "Content direction and branding support for social presence, posts, and team publication.",
      result: "Archived",
    },
  ],
  [
    {
      code: "CC-004",
      year: "2025",
      image: "Assets/contentcreator.png",
      alt: "Content planning case file",
      title: "Editorial Plan",
      category: "Social Media - Planning",
      description: "A structured calendar system for turning rough ideas into consistent campaign posts.",
      result: "Planned",
    },
    {
      code: "CC-005",
      year: "2024",
      image: "Assets/pdd.png",
      alt: "Documentation workflow case file",
      title: "Event Coverage",
      category: "Documentation - Publication",
      description: "Fast capture and curation process for publishing event moments with a clean visual rhythm.",
      result: "Published",
    },
    {
      code: "CC-006",
      year: "2024",
      image: "Assets/kabirobranding.png",
      alt: "Brand content archive case file",
      title: "Content Archive",
      category: "Branding - Archive",
      description: "Organized visual references and caption formats for reusable team publication assets.",
      result: "Filed",
    },
  ],
  [
    {
      code: "CC-007",
      year: "2026",
      image: "Assets/contentcreator.png",
      alt: "Campaign review case file",
      title: "Campaign Review",
      category: "Analytics - Content",
      description: "Post-campaign notes that compare audience response, posting rhythm, and visual clarity.",
      result: "Reviewed",
    },
    {
      code: "CC-008",
      year: "2025",
      image: "Assets/pdd.png",
      alt: "Visual direction case file",
      title: "Visual Direction",
      category: "Creative - Direction",
      description: "A focused visual approach for keeping design, documentation, and copy aligned.",
      result: "Directed",
    },
    {
      code: "CC-009",
      year: "2025",
      image: "Assets/kabirobranding.png",
      alt: "Publication system case file",
      title: "Publication Kit",
      category: "Content - System",
      description: "Reusable content components for captions, carousels, and campaign documentation.",
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
