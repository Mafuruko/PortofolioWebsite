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
      year: "2025",
      image: "Assets/Folder/Gestura.png",
      alt: "Gestura ASL learning website case file",
      title: "Gestura",
      category: "Interaksi Manusia dan Komputer - Web App",
      client: "Mata Kuliah Interaksi Manusia dan Komputer",
      role: "Front-End Developer",
      description: "Website pembelajaran American Sign Language dengan fitur translation, learning video, dan history penggunaan.",
      brief: "Membuat aplikasi bertema disabilitas sebagai proyek kelompok dalam mata kuliah Interaksi Manusia dan Komputer. Proyek dikerjakan oleh tiga orang dengan fokus pada penerapan UI/UX yang mudah dipahami dan nyaman digunakan oleh pengguna.",
      objective: "Membangun website yang membantu pengguna mempelajari American Sign Language (ASL) melalui pengalaman belajar yang sederhana, interaktif, dan mudah dipahami. Website dirancang agar pengguna dapat menerjemahkan bahasa isyarat melalui video serta mempelajari ASL melalui berbagai konten video pembelajaran.",
      process: [
        "Melakukan observasi terhadap website dan aplikasi serupa untuk memahami pola interaksi yang sudah familiar bagi pengguna.",
        "Menentukan fitur utama seperti video upload untuk translation, pencarian video pembelajaran ASL, serta history video yang pernah digunakan.",
        "Merancang UI/UX menggunakan Figma sebelum mengimplementasikan desain tersebut ke dalam website.",
        "Mengembangkan tampilan front-end dan memastikan alur interaksi sesuai dengan desain yang telah dibuat.",
      ],
      solution: "Gestura berhasil dikembangkan sebagai website pembelajaran bahasa isyarat yang menggabungkan fitur translation dan learning dalam satu platform, dari pemahaman kebutuhan pengguna sampai implementasi desain menjadi website yang dapat digunakan.",
      metrics: [
        { value: "AB", label: "Score" },
        { value: "3 Months", label: "Time Spent" },
        { value: "3", label: "Total SKS" },
      ],
      result: "Score AB",
      evidenceUrl: "https://github.com/Mafuruko/Gestura",
      evidenceImages: ["Assets/Folder/Gestura.png", "Assets/Folder/Gestura-2.png"],
    },
    {
      code: "WEB-002",
      year: "2025",
      image: "Assets/Folder/TCSchedulify.png",
      alt: "TCSchedulify scheduling web application case file",
      title: "TCSchedulify",
      category: "Rekayasa Sistem Berbasis Pengetahuan - Web App",
      client: "Mata Kuliah Rekayasa Sistem Berbasis Pengetahuan",
      role: "Front-End Developer",
      description: "Aplikasi rekomendasi jadwal kuliah Informatika ITS berdasarkan preferensi waktu dan dosen pengguna.",
      brief: "Membuat final project berupa aplikasi berbasis algoritma sebagai bagian dari mata kuliah Rekayasa Sistem Berbasis Pengetahuan. Aplikasi dirancang untuk membantu mahasiswa Informatika ITS menyusun jadwal perkuliahan sebelum melakukan FRS atau pengambilan kelas.",
      objective: "Membangun aplikasi yang membantu mahasiswa Informatika ITS menemukan kombinasi jadwal kuliah yang paling sesuai berdasarkan preferensi pengguna. Pengguna dapat melihat detail kelas, jadwal, dosen pengajar, serta menentukan prioritas seperti dosen yang ingin dihindari atau waktu kelas yang lebih diinginkan.",
      process: [
        "Menentukan kebutuhan utama mahasiswa saat menyusun jadwal sebelum melakukan FRS.",
        "Menyediakan informasi kelas secara detail, termasuk mata kuliah, waktu perkuliahan, dan dosen pengajar.",
        "Membuat sistem preferensi agar pengguna dapat menentukan dosen yang ingin dihindari maupun jadwal kelas yang diinginkan.",
        "Menggunakan algoritma untuk menghasilkan rekomendasi kombinasi jadwal berdasarkan prioritas pengguna.",
        "Mengimplementasikan tampilan front-end agar proses pemilihan preferensi dan hasil rekomendasi jadwal mudah dipahami.",
      ],
      solution: "TCSchedulify berhasil dikembangkan sebagai aplikasi pendukung penyusunan jadwal kuliah yang membantu mahasiswa mempertimbangkan berbagai pilihan kelas sebelum FRS melalui sistem prioritas dan rekomendasi.",
      metrics: [
        { value: "AB", label: "Score" },
        { value: "1 Month", label: "Time Spent" },
        { value: "3", label: "Total SKS" },
      ],
      result: "Score AB",
      evidenceUrl: "https://github.com/Mafuruko/FP_RSBP",
      evidenceImages: ["Assets/Folder/TCSchedulify.png", "Assets/Folder/TCSchedulify-2.png"],
    },
    {
      code: "WEB-003",
      year: "2026",
      image: "Assets/Folder/wccantik.jpeg",
      alt: "Interactive 3D bathroom website case file",
      title: "WC Cantik Informatika 3D",
      category: "Grafika Komputer - Three.js",
      client: "Mata Kuliah Grafika Komputer",
      role: "3D Model Maker",
      description: "Rekonstruksi ruang WC Informatika ITS dalam bentuk 3D interaktif menggunakan Blender dan Three.js.",
      brief: "Membuat final project berbasis grafika komputer dengan memanfaatkan Three.js untuk menampilkan objek 3D secara interaktif di dalam website. Objek yang dipilih adalah salah satu WC di Informatika ITS yang direkonstruksi berdasarkan kondisi dan ukuran ruang sebenarnya.",
      objective: "Membangun representasi 3D WC Informatika ITS yang mendekati kondisi aslinya, lalu menampilkannya secara interaktif di website menggunakan Three.js. Proyek ini juga menerapkan konsep grafika komputer seperti pemodelan 3D, animasi pergerakan, pencahayaan, dan efek refleksi.",
      process: [
        "Melakukan pengukuran langsung terhadap ruang WC Informatika ITS untuk mendapatkan dimensi dan proporsi yang sesuai.",
        "Membuat model 3D berdasarkan hasil pengukuran menggunakan Blender.",
        "Mengintegrasikan model 3D ke dalam website menggunakan Three.js.",
        "Membuat interaksi dan animasi pergerakan agar pengguna dapat mengeksplorasi ruang secara natural.",
        "Mengimplementasikan efek mirror dan elemen visual lain untuk meningkatkan realisme tampilan.",
      ],
      solution: "Proyek ini berhasil merekonstruksi ruang WC Informatika ITS ke bentuk 3D berdasarkan pengukuran langsung, lalu menampilkannya secara interaktif dengan animasi pergerakan dan efek refleksi.",
      metrics: [
        { value: "A", label: "Score" },
        { value: "2 Months", label: "Time Spent" },
        { value: "3", label: "Total SKS" },
      ],
      result: "Score A",
      evidenceUrl: "https://github.com/Mafuruko/FP_Grafkom",
      evidenceImages: ["Assets/Folder/wccantik-1.png", "Assets/Folder/wccantik-2.jpeg"],
    },
  ],
  [
    {
      code: "WEB-004",
      year: "2026",
      image: "Assets/Folder/pacman.png",
      alt: "Pacman pathfinding algorithm game case file",
      title: "Pacman dengan Algoritma",
      category: "Perancangan dan Analisis Algoritma - Game",
      client: "Mata Kuliah Perancangan dan Analisis Algoritma",
      role: "Game UI/UX Designer",
      description: "Game Pac-Man berbasis Python dan Pygame untuk visualisasi algoritma pathfinding dalam maze interaktif.",
      brief: "Membuat final project berupa game yang menerapkan algoritma sebagai bagian dari mata kuliah Perancangan dan Analisis Algoritma. Kelompok mengembangkan game bergaya Pac-Man menggunakan Python dan Pygame dengan penerapan berbagai algoritma pathfinding pada pergerakan karakter di dalam maze.",
      objective: "Membangun game Pac-Man yang dapat mendemonstrasikan cara kerja berbagai algoritma pencarian jalur dalam lingkungan permainan yang interaktif. Game juga dirancang dengan UI/UX yang mudah dipahami agar pemain dapat menikmati permainan sekaligus melihat penerapan algoritma secara langsung.",
      process: [
        "Menentukan konsep Pac-Man sebagai media untuk menerapkan dan membandingkan algoritma pathfinding.",
        "Mengimplementasikan algoritma BFS, DFS, A* Search, dan Dijkstra untuk pencarian jalur di dalam maze.",
        "Merancang tampilan, layout, dan elemen visual game agar informasi dapat dipahami dengan mudah oleh pemain.",
        "Mengembangkan game menggunakan Python dan Pygame serta mengintegrasikan algoritma dengan mekanisme permainan.",
        "Melakukan testing untuk memastikan gameplay dan pergerakan berbasis algoritma dapat berjalan dengan baik.",
      ],
      solution: "Proyek ini berhasil mengimplementasikan beberapa algoritma pathfinding ke dalam game Pac-Man sebagai visualisasi penerapan algoritma dalam lingkungan interaktif dengan UI/UX yang mudah dipahami.",
      metrics: [
        { value: "A", label: "Score" },
        { value: "2 Weeks", label: "Time Spent" },
        { value: "3", label: "Total SKS" },
      ],
      result: "Score A",
      evidenceUrl: "https://github.com/Gembut/PacManWakawakaDAA",
      evidenceImages: ["Assets/Folder/pacman-1.png", "Assets/Folder/pacman-2.png"],
    },
    {
      code: "WEB-005",
      year: "2026",
      image: "Assets/Folder/LearnvidAI.png",
      alt: "LearnVid AI web platform case file",
      title: "LearnVid AI",
      category: "Pemrograman Berbasis Kerangka Kerja - AI Web",
      client: "Mata Kuliah Pemrograman Berbasis Kerangka Kerja",
      role: "Front-End Developer",
      description: "Platform pembelajaran berbasis chatbot AI untuk membuat materi edukasi visual dalam bentuk video.",
      brief: "Membuat final project berbasis framework yang mengintegrasikan teknologi AI ke dalam sebuah aplikasi web. Kelompok mengembangkan LearnVid AI, sebuah platform pembelajaran berbasis chatbot yang membantu pengguna membuat materi edukasi dalam bentuk video visual berdasarkan topik yang ingin dipelajari.",
      objective: "Membangun platform pembelajaran berbasis AI yang membantu siswa, dosen, maupun pengguna umum memahami berbagai topik melalui konten video edukasi yang lebih visual dan mudah dipahami. Aplikasi dirancang agar proses mencari materi terasa lebih interaktif melalui pendekatan chatbot dan generasi konten berbasis AI.",
      process: [
        "Menentukan konsep chatbot AI sebagai media interaksi utama antara pengguna dan platform.",
        "Merancang alur pengguna mulai dari memasukkan topik pembelajaran hingga mendapatkan hasil berupa materi video edukasi.",
        "Mengembangkan tampilan front-end agar proses interaksi dengan AI terasa sederhana, intuitif, dan mudah dipahami.",
        "Mengintegrasikan tampilan dengan sistem AI dan fitur pembuatan konten pembelajaran yang dikembangkan oleh tim.",
        "Melakukan pengujian dan penyempurnaan tampilan agar aplikasi dapat digunakan dengan nyaman sebagai platform pembelajaran.",
      ],
      solution: "LearnVid AI berhasil dikembangkan sebagai platform pembelajaran berbasis AI yang menggabungkan interaksi chatbot dengan konten edukasi berbentuk video.",
      metrics: [
        { value: "A", label: "Score" },
        { value: "6 Months", label: "Time Spent" },
        { value: "3", label: "Total SKS" },
      ],
      result: "Score A",
      evidenceUrl: "https://github.com/NureSketsa/FP",
      evidenceImages: ["Assets/Folder/LearnvidAI.png", "Assets/Folder/LearnVidAI-2.png"],
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
