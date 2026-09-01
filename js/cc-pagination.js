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
      year: "2026",
      image: "Assets/Folder/minumanlarang.webp",
      alt: "ITS Student Choir content documentation",
      title: "Minuman yang Dilarang",
      category: "ITS Student Choir - Content Creation",
      client: "ITS Student Choir",
      role: "Kabiro Branding",
      description: "Konten hiburan ringan tentang keseharian anggota paduan suara dengan hook, tren audio, dan humor yang relatable.",
      brief: "Membuat konten hiburan yang relevan dengan keseharian anggota paduan suara untuk audiens Instagram dan TikTok ITS Student Choir. Konten dirancang dengan pendekatan yang ringan, relatable, dan sesuai dengan karakter komunikasi ITS Choir di media sosial.",
      objective: "Menciptakan konten yang relatable dan menghibur sehingga mampu menarik perhatian audiens, meningkatkan interaksi, serta berkontribusi terhadap pertumbuhan engagement dan followers pada akun Instagram dan TikTok ITS Choir.",
      process: [
        "Membuat hook yang kuat di awal untuk menarik rasa penasaran audiens.",
        "Mengemas konten seperti edukasi dengan tambahan humor dan punchline.",
        "Menggunakan audio yang sedang tren untuk meningkatkan relevansi dan jangkauan konten.",
      ],
      solution: "Pendekatan yang menggabungkan hook, rasa penasaran, tren audio, serta humor yang relatable berhasil menarik perhatian audiens dan mendorong mereka untuk menonton serta berinteraksi dengan konten.",
      metrics: [
        { value: "38,332", label: "Likes" },
        { value: "481,132", label: "Views" },
        { value: "42,335", label: "Accounts Engaged" },
      ],
      result: "481K Views",
      evidenceUrl: "https://www.instagram.com/reel/DV0nlBJE4hh/",
      evidenceImages: ["Assets/Folder/minumanlarang.webp", "Assets/Folder/minumanlarang-2.webp"],
    },
    {
      code: "CC-002",
      year: "2026",
      image: "Assets/Folder/conductorcreative.webp",
      alt: "Conductor creative content documentation",
      title: "Conductor Mendadak Kreatif",
      category: "ITS Student Choir - Content Creation",
      client: "ITS Student Choir",
      role: "Kabiro Branding",
      description: "Konten komedi tentang conductor yang memberi arahan unik hingga membuat anggota paduan suara kebingungan.",
      brief: "Membuat konten hiburan yang relevan dengan keseharian anggota paduan suara untuk audiens Instagram dan TikTok ITS Student Choir. Konten mengangkat situasi relatable ketika conductor memberikan arahan yang tidak biasa hingga membuat anggota paduan suara kebingungan.",
      objective: "Menciptakan konten yang relatable dan menghibur sehingga mampu menarik perhatian audiens, meningkatkan interaksi, serta berkontribusi terhadap pertumbuhan engagement dan followers pada akun Instagram dan TikTok ITS Choir.",
      process: [
        "Membuat hook di awal dengan situasi yang langsung menarik rasa penasaran audiens.",
        "Mengangkat tingkah conductor yang memberikan arahan unik dan membingungkan sebagai sumber komedi.",
        "Menggunakan audio yang sedang tren untuk meningkatkan relevansi dan jangkauan konten.",
      ],
      solution: "Pendekatan komedi yang mengangkat situasi familiar dalam latihan paduan suara berhasil membuat konten terasa relatable dan menghibur. Rasa penasaran terhadap arahan conductor juga mendorong audiens untuk terus menonton hingga akhir.",
      metrics: [
        { value: "7,798", label: "Likes" },
        { value: "69,019", label: "Views" },
        { value: "8,057", label: "Accounts Engaged" },
      ],
      result: "69K Views",
      evidenceUrl: "https://www.instagram.com/reel/DZ1QLVsz8B2/",
      evidenceImages: ["Assets/Folder/conductorcreative.webp", "Assets/Folder/conductorcreative-2.webp"],
    },
    {
      code: "CC-003",
      year: "2025",
      image: "Assets/Folder/NLCCore.webp",
      alt: "NLC Core Schematics ITS content documentation",
      title: "NLC Core",
      category: "Schematics ITS - Content Creation",
      client: "Schematics ITS",
      role: "Ketua Sub-Divisi Konten Kreator",
      description: "Konten yang memperlihatkan keseruan kompetisi NLC lewat momen spontan, lucu, dan mudah dinikmati audiens.",
      brief: "Membuat konten yang memperlihatkan keseruan kompetisi NLC di Schematics ITS dengan pendekatan yang ringan dan menghibur. Konten menampilkan berbagai momen lucu dan spontan yang terjadi selama perlombaan agar audiens dapat mengenal suasana kompetisi dengan cara yang lebih menarik.",
      objective: "Meningkatkan awareness terhadap kompetisi NLC dengan memperlihatkan pengalaman dan suasana perlombaan secara lebih relatable, sehingga audiens tidak hanya mengetahui kompetisinya tetapi juga tertarik dengan keseruan yang terjadi di dalamnya.",
      process: [
        "Mengambil momen-momen spontan dan lucu yang terjadi selama kompetisi.",
        "Mengemas suasana perlombaan menjadi konten yang ringan dan menghibur.",
        "Menampilkan sisi kompetisi yang lebih dekat dan relatable agar audiens tertarik untuk mengenal NLC lebih lanjut.",
      ],
      solution: "Pendekatan yang menampilkan momen lucu dan spontan berhasil memperkenalkan keseruan NLC kepada audiens dengan cara yang ringan dan menarik.",
      metrics: [
        { value: "717", label: "Likes" },
        { value: "22.1K", label: "Views" },
        { value: "2", label: "Comments" },
      ],
      result: "22.1K Views",
      evidenceUrl: "https://www.instagram.com/reels/DQRViQeDoF9/",
      evidenceImages: ["Assets/Folder/NLCCore.webp", "Assets/Folder/NLCCore-2.webp"],
    },
  ],
  [
    {
      code: "CC-004",
      year: "2024",
      image: "Assets/Folder/wahkmanakinfor.webp",
      alt: "Schematics ITS Informatics meme content",
      title: "Waw Kamu Anak Informatika??",
      category: "Schematics ITS - Content Creation",
      client: "Schematics ITS",
      role: "Staff Konten Kreator",
      description: "Konten meme yang mengangkat stereotype anak Informatika dengan punchline sederhana dan mudah dibagikan.",
      brief: "Membuat konten meme yang relatable dengan target audiens Schematics ITS, khususnya mahasiswa dan orang-orang yang familiar dengan dunia Informatika dan teknologi.",
      objective: "Meningkatkan engagement Schematics ITS melalui konten humor yang ringan, relatable, dan mudah dibagikan oleh audiens di media sosial.",
      process: [
        "Mengangkat stereotype yang familiar di kalangan mahasiswa Informatika sebagai dasar humor.",
        "Membuat punchline dari jawaban HTML ketika ditanya mengenai bahasa pemrograman.",
        "Mengemasnya dalam format meme yang singkat dan mudah dipahami agar memiliki potensi untuk dibagikan secara luas.",
      ],
      solution: "Penggunaan stereotype anak Informatika yang relatable dengan punchline sederhana berhasil menarik perhatian audiens dan menghasilkan interaksi yang tinggi. Konten ini menjadi salah satu konten dengan jangkauan terbesar melalui pendekatan meme yang dekat dengan target audiens Schematics ITS.",
      metrics: [
        { value: "250K", label: "Likes" },
        { value: "4.1M", label: "Views" },
        { value: "1,422", label: "Comments" },
      ],
      result: "4.1M Views",
      evidenceUrl: "https://www.instagram.com/reel/C7Eql_np4wB/",
      evidenceImages: ["Assets/Folder/wahkmanakinfor.webp", "Assets/Folder/wahkmanakinfor-2.webp"],
    },
    {
      code: "CC-005",
      year: "2024",
      image: "Assets/Folder/oprecmabacup.webp",
      alt: "Mabacup ITS open recruitment content",
      title: "Open Recruitment Staff Mabacup",
      category: "Mabacup ITS - Content Creation",
      client: "Mabacup ITS",
      role: "Staff Ahli Konten Kreator",
      description: "Konten promosi open recruitment yang dikemas ringan, komunikatif, dan sesuai dengan audiens mahasiswa.",
      brief: "Membuat konten promosi untuk mengumumkan pembukaan Open Recruitment Staff Mabacup ITS dengan penyampaian yang menarik dan sesuai dengan karakter audiens mahasiswa.",
      objective: "Meningkatkan awareness mengenai Open Recruitment Mabacup ITS serta menarik audiens untuk mengetahui lebih lanjut dan mendaftarkan diri sebagai bagian dari kepanitiaan.",
      process: [
        "Mengembangkan konsep konten bersama rekan-rekan Staff Ahli Konten Kreator.",
        "Mengemas informasi Open Recruitment dalam format video yang ringan dan menarik.",
        "Membuat penyampaian yang komunikatif agar informasi dapat diterima audiens tanpa terasa seperti pengumuman formal.",
      ],
      solution: "Pendekatan promosi yang ringan dan menarik berhasil menyampaikan informasi Open Recruitment Mabacup ITS sekaligus mendapatkan respons dan jangkauan yang baik dari audiens.",
      metrics: [
        { value: "1,045", label: "Likes" },
        { value: "31.6K", label: "Views" },
        { value: "6", label: "Comments" },
      ],
      result: "31.6K Views",
      evidenceUrl: "https://www.instagram.com/reel/C_aYUQEJxx7/",
      evidenceImages: ["Assets/Folder/oprecmabacup.webp", "Assets/Folder/oprecmabacup-2.webp"],
    },
    {
      code: "CC-006",
      year: "2024",
      image: "Assets/Folder/lolosberkas.webp",
      alt: "Mabacup ITS announcement content",
      title: "Informasi Keterima Berkas",
      category: "Mabacup ITS - Content Creation",
      client: "Mabacup ITS",
      role: "Staff Ahli Konten Kreator",
      description: "Konten announcement hasil seleksi berkas yang jelas, menarik, dan mengarahkan peserta ke tahap interview.",
      brief: "Membuat konten announcement untuk menginformasikan hasil seleksi berkas Open Recruitment Mabacup ITS serta mengarahkan peserta untuk mengecek status kelulusan mereka sebelum melanjutkan ke tahap interview.",
      objective: "Menyampaikan informasi hasil seleksi berkas dengan cara yang jelas dan menarik, sekaligus memastikan peserta mengetahui tahapan selanjutnya dalam proses Open Recruitment Mabacup ITS.",
      process: [
        "Mengemas informasi hasil seleksi berkas dalam format video yang ringan dan mudah dipahami.",
        "Membuat penyampaian yang menarik agar peserta terdorong untuk segera mengecek hasil seleksi.",
        "Mengarahkan peserta yang lolos untuk mempersiapkan diri menuju tahap interview.",
      ],
      solution: "Konten announcement ini berhasil menyampaikan informasi penting mengenai hasil seleksi berkas dengan cara yang lebih menarik dan komunikatif, sekaligus mengarahkan peserta menuju tahap interview selanjutnya.",
      metrics: [
        { value: "1,212", label: "Likes" },
        { value: "38K", label: "Views" },
        { value: "5", label: "Comments" },
      ],
      result: "38K Views",
      evidenceUrl: "https://www.instagram.com/reel/C_lEAQyypcr/",
      evidenceImages: ["Assets/Folder/lolosberkas.webp", "Assets/Folder/lolosberkas-2.webp"],
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
