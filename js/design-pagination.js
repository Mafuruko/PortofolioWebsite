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
      year: "2026",
      image: "Assets/Folder/savera.jpeg",
      alt: "Kabinet Savera PSM ITS visual identity design case file",
      title: "Design Feeds Kabinet Savera",
      category: "ITS Student Choir - Visual Identity",
      client: "ITS Student Choir (Kabinet Savera)",
      role: "Kabiro Branding",
      description: "Visual identity dan konten Instagram Kabinet Savera dengan pendekatan playful, hangat, dan distinctive.",
      brief: "Membuat visual identity dan konten Instagram untuk Kabinet Savera PSM ITS yang dapat merepresentasikan karakter kabinet dengan pendekatan yang playful, hangat, dan menarik. Konsep visual dikembangkan dengan inspirasi children's storybook dan puppet show, kemudian diterapkan ke berbagai kebutuhan konten seperti feeds, story, copywriting, hingga konten reveal.",
      objective: "Membangun tampilan media sosial yang konsisten dan memiliki identitas visual yang kuat agar Kabinet Savera lebih mudah dikenali oleh audiens. Selain itu, desain dibuat untuk menciptakan pengalaman visual yang lebih menyenangkan serta meningkatkan ketertarikan audiens terhadap konten ITS Student Choir.",
      process: [
        "Menentukan konsep visual utama dengan inspirasi children's storybook dan puppet show.",
        "Mengembangkan elemen desain, layout, ilustrasi, dan gaya komunikasi yang konsisten untuk setiap konten.",
        "Menerapkan visual identity ke berbagai kebutuhan seperti Instagram feeds, story, copywriting, dan konten reveal.",
        "Membuat animasi sederhana untuk mendukung konten reveal agar terasa lebih dinamis dan menarik.",
        "Menjaga konsistensi visual selama periode kabinet agar seluruh konten memiliki karakter yang sama.",
      ],
      solution: "Visual identity Kabinet Savera berhasil diterapkan secara konsisten pada berbagai format konten Instagram ITS Student Choir. Pendekatan children's storybook dan puppet show memberikan karakter yang lebih playful dan distinctive.",
      metrics: [
        { value: "15+", label: "Designs Created" },
        { value: "71.67%", label: "KPI Achievement" },
        { value: "1 Tahun", label: "Periode" },
      ],
      result: "15+ Designs",
      evidenceUrl: "https://www.instagram.com/itschoir/",
      evidenceImages: ["Assets/Folder/Savera-1.png", "Assets/Folder/savera-2.png"],
    },
    {
      code: "DSG-002",
      year: "2026",
      image: "Assets/Folder/orcaelits.jpeg",
      alt: "Forum Daerah Samarinda visual identity design case file",
      title: "Design Feeds IniLhoITS Samarinda",
      category: "Forum Daerah Bahima ITS - Social Media Design",
      client: "Forum Daerah Bahima ITS",
      role: "Ketua Divisi Publikasi, Dokumentasi, dan Desain",
      description: "Revitalisasi identitas visual Instagram Forum Daerah Samarinda agar lebih konsisten, menarik, dan mudah dikenali.",
      brief: "Membangun kembali identitas visual dan media sosial Forum Daerah Samarinda setelah aktivitas organisasi dari generasi sebelumnya mulai berkurang. Sebagai bagian dari proses revitalisasi forum, dibutuhkan tampilan Instagram yang konsisten dan menarik untuk memperkenalkan kembali Forum Daerah Samarinda kepada mahasiswa dan calon mahasiswa ITS asal Samarinda.",
      objective: "Membangun identitas visual media sosial dari awal yang dapat menjadi fondasi komunikasi Forum Daerah Samarinda. Desain dibuat untuk menciptakan tampilan Instagram yang lebih konsisten, mudah dikenali, serta mendukung penyampaian informasi dan kegiatan forum kepada audiens.",
      process: [
        "Menentukan konsep dan arah visual Forum Daerah Samarinda dari awal bersama tim.",
        "Mengembangkan sistem desain untuk Instagram feeds dan template story agar memiliki tampilan yang konsisten.",
        "Membuat berbagai kebutuhan konten untuk mendukung informasi, kegiatan, dan pengenalan kembali forum kepada audiens.",
        "Menjaga konsistensi visual agar identitas yang dibangun dapat digunakan sebagai dasar untuk konten selanjutnya.",
        "Berkolaborasi dengan tim dalam membangun kembali presence Forum Daerah Samarinda di media sosial.",
      ],
      solution: "Proyek ini berhasil membangun kembali identitas visual Forum Daerah Samarinda dari awal dan menerapkannya secara konsisten pada Instagram feeds maupun story.",
      metrics: [
        { value: "15+", label: "Designs Created" },
        { value: "100%", label: "KPI Achievement" },
        { value: "1 Tahun 5 Bulan", label: "Periode" },
      ],
      result: "100% KPI",
      evidenceUrl: "https://www.instagram.com/orcael.its/",
      evidenceImages: ["Assets/Folder/orcaelits-1.png", "Assets/Folder/orcaelits-2.png"],
    },
    {
      code: "DSG-003",
      year: "2025",
      image: "Assets/Folder/niraswara.jpeg",
      alt: "Kabinet Niraswara PSM ITS visual identity design case file",
      title: "Design Feeds Kabinet Niraswara",
      category: "ITS Student Choir - Branding",
      client: "ITS Student Choir (Kabinet Niraswara)",
      role: "Kabiro Branding",
      description: "Identitas visual Kabinet Niraswara dan momentum 50 tahun PSM ITS dengan konsep Greek museum.",
      brief: "Mengembangkan identitas visual media sosial Kabinet Niraswara sekaligus mendukung momentum 50 Tahun PSM ITS melalui tampilan yang memiliki karakter kuat dan konsisten. Konsep visual dikembangkan melalui Graphic Standard Manual (GSM) dengan inspirasi Greek museum, kemudian diterapkan ke Instagram feeds, konten animasi, dan berbagai kebutuhan komunikasi digital.",
      objective: "Membangun visual identity yang dapat merepresentasikan Kabinet Niraswara dan perayaan 50 Tahun PSM ITS secara konsisten di media sosial. Konten juga dikembangkan agar Instagram ITS Student Choir tidak hanya berfungsi sebagai media informasi, tetapi mulai memiliki pendekatan content creation yang lebih kreatif dan engaging.",
      process: [
        "Mengembangkan Graphic Standard Manual dengan konsep visual yang terinspirasi dari Greek museum.",
        "Menerapkan identitas visual ke berbagai kebutuhan Instagram feeds dan konten digital.",
        "Membuat animasi sederhana untuk mendukung reveal dan penyampaian visual agar lebih dinamis.",
        "Mulai mengembangkan konsep content creation sebagai pendekatan baru dalam media sosial PSM ITS.",
        "Mempelajari proses media, branding, dan desain secara mandiri bersama tim serta melakukan evaluasi berdasarkan KPI.",
      ],
      solution: "Kabinet Niraswara menjadi salah satu proses awal dalam membangun pengalaman media, branding, dan desain. Melalui pengembangan GSM, konten visual, animasi, dan pendekatan content creation, tim berhasil menciptakan identitas media sosial yang konsisten.",
      metrics: [
        { value: "20+", label: "Designs Created" },
        { value: "98.34%", label: "KPI Achievement" },
        { value: "1 Tahun", label: "Periode" },
      ],
      result: "98.34% KPI",
      evidenceUrl: "https://www.instagram.com/itschoir/",
      evidenceImages: ["Assets/Folder/niraswara-1.png", "Assets/Folder/niraswara-2.png"],
    },
  ],
  [
    {
      code: "DSG-004",
      year: "2024",
      image: "Assets/Folder/abracadabra.jpeg",
      alt: "Kabinet Abracadabra PSM ITS social media design case file",
      title: "Design Feeds Kabinet Abracadabra",
      category: "ITS Student Choir - Media Information",
      client: "ITS Student Choir (Kabinet Abracadabra)",
      role: "Staff Magang Media Informasi",
      description: "Desain media informasi Instagram Kabinet Abracadabra selama periode magang dengan arahan dan feedback tim.",
      brief: "Mendukung kebutuhan media informasi Kabinet Abracadabra PSM ITS melalui pembuatan berbagai desain untuk Instagram selama periode magang. Sebagai pengalaman awal di bidang media dan desain, saya terlibat dalam proses pembuatan konten visual dengan arahan dan bimbingan dari anggota tim yang lebih berpengalaman.",
      objective: "Membantu menjaga konsistensi visual media sosial ITS Student Choir sekaligus mempelajari proses pembuatan desain yang sesuai dengan identitas Kabinet Abracadabra. Periode magang ini juga menjadi kesempatan untuk memahami alur kerja media informasi, mulai dari menerima brief hingga menghasilkan desain yang siap dipublikasikan.",
      process: [
        "Mempelajari dasar pembuatan desain media sosial berdasarkan visual identity yang telah ditentukan.",
        "Membuat berbagai kebutuhan Instagram feeds seperti Birthday Calendar, apresiasi anggota, dan konten informatif lainnya.",
        "Menerima feedback dan melakukan revisi desain bersama tim Media Informasi.",
        "Menyesuaikan desain dengan guideline serta karakter visual Kabinet Abracadabra.",
        "Berkontribusi selama kurang lebih enam bulan dalam setengah periode kepengurusan.",
      ],
      solution: "Kabinet Abracadabra menjadi pengalaman awal dalam mempelajari media informasi dan desain secara lebih terstruktur. Melalui bimbingan, feedback, dan pengerjaan berbagai konten Instagram, workflow desain organisasi mulai terbentuk.",
      metrics: [
        { value: "5+", label: "Designs Created" },
        { value: "93.59%", label: "KPI Achievement" },
        { value: "6 Bulan", label: "Periode" },
      ],
      result: "93.59% KPI",
      evidenceUrl: "https://www.instagram.com/itschoir/",
      evidenceImages: ["Assets/Folder/abracadabra-1.png", "Assets/Folder/abracadabra-2.png"],
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
  card.hidden = !data;

  if (!data) {
    card.removeAttribute("data-case-data");
    return;
  }

  card.dataset.caseData = JSON.stringify(data);
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
  caseCards.forEach((card, index) => {
    setCardContent(card, casePages[currentPage][index]);
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
