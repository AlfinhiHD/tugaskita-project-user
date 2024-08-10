const todaysTasks = [
  {
    id: 1,
    title: "Matematika: Persamaan Kuadrat 1",
    points: 100,
    description: "Selesaikan 10 soal persamaan kuadrat",
  },
  {
    id: 2,
    title: "Matematika: Persamaan Kuadrat 2",
    points: 200,
    description: "Selesaikan 10 soal persamaan kuadrat",
  },
  {
    id: 3,
    title: "Matematika: Persamaan Kuadrat 3",
    points: 150,
    description: "Selesaikan 10 soal persamaan kuadrat",
  },
];

const tugasList = [
  {
    id: 1,
    name: "Matematika: Persamaan Kuadrat",
    description:
      "Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail. Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail. Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail. Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail. Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail.",
    endDate: "2024-08-15",
    points: 200,
  },
  {
    id: 2,
    name: "Bahasa Inggris: Essay Writing",
    description:
      "Tulis sebuah esai dalam bahasa Inggris dengan tema 'The Impact of Technology on Education' sepanjang 500 kata.",
    endDate: "2024-08-20",
    points: 300,
  },
  {
    id: 3,
    name: "Matematika: Persamaan Kuadrat",
    description:
      "Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail. Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail. Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail. Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail. Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail.",
    endDate: "2024-08-15",
    points: 200,
  },
  {
    id: 4,
    name: "Bahasa Inggris: Essay Writing",
    description:
      "Tulis sebuah esai dalam bahasa Inggris dengan tema 'The Impact of Technology on Education' sepanjang 500 kata.",
    endDate: "2024-08-20",
    points: 600,
  },
  {
    id: 5,
    name: "Matematika: Persamaan Kuadrat",
    description:
      "Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail. Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail. Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail. Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail. Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail.",
    endDate: "2024-08-15",
    points: 200,
  },
  {
    id: 6,
    name: "Bahasa Inggris: Essay Writing",
    description:
      "Tulis sebuah esai dalam bahasa Inggris dengan tema 'The Impact of Technology on Education' sepanjang 500 kata.",
    endDate: "2024-08-20",
    points: 600,
  },
  {
    id: 7,
    name: "Matematika: Persamaan Kuadrat",
    description:
      "Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail. Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail. Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail. Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail. Selesaikan 10 soal persamaan kuadrat yang telah disediakan. Jelaskan langkah-langkah penyelesaian dengan detail.",
    endDate: "2024-08-15",
    points: 200,
  },
  {
    id: 8,
    name: "Bahasa Inggris: Essay Writing",
    description:
      "Tulis sebuah esai dalam bahasa Inggris dengan tema 'The Impact of Technology on Education' sepanjang 500 kata.",
    endDate: "2024-08-20",
    points: 600,
  },
];

const rewardsList = [
  { id: 1, name: "Headphone Bluetooth", image: "/assets/images/default-image.jpg", points: 500 },
  { id: 2, name: "Voucher Belanja", image: "/assets/images/default-image.jpg", points: 200 },
  { id: 3, name: "Smartphone", image: "/assets/images/default-image.jpg", points: 1000 },
  { id: 4, name: "Smartphone", image: "/assets/images/default-image.jpg", points: 1000 },
  { id: 5, name: "Smartphone", image: "/assets/images/default-image.jpg", points: 1000 },
  { id: 6, name: "Smartphone", image: "/assets/images/default-image.jpg", points: 1000 },
  { id: 7, name: "Headphone Bluetooth", image: "/assets/images/default-image.jpg", points: 500 },
  { id: 8, name: "Voucher Belanja", image: "/assets/images/default-image.jpg", points: 200 },
  { id: 9, name: "Smartphone", image: "/assets/images/default-image.jpg", points: 1000 },
];


const taskData = [
  { id: 1, name: 'Matematika: Persamaan Kuadrat', points: 100, type: 'Submit', date: '2024-08-01', status: 'Perlu Review' },
  { id: 2, name: 'Fisika: Hukum Newton', points: 150, type: 'Pengajuan', date: '2024-08-02', status: 'Diterima' },
  { id: 3, name: 'Biologi: Sistem Peredaran Darah', points: 120, type: 'Submit', date: '2024-08-03', status: 'Ditolak' },
];

const rewardData = [
  { id: 1, name: 'Voucher Belanja', date: '2024-08-01', status: 'Perlu Review' },
  { id: 2, name: 'Tiket Bioskop', date: '2024-08-02', status: 'Diterima' },
  { id: 3, name: 'Buku Pelajaran', date: '2024-08-03', status: 'Ditolak' },
];