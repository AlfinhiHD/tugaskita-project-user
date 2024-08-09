import { useState, useEffect } from "react";

const useTugas = () => {
  const [search, setSearch] = useState("");
  const [pointRange, setPointRange] = useState("semua");
  const [endDate, setEndDate] = useState("");
  const [filteredTugas, setFilteredTugas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

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

  useEffect(() => {
    const filtered = tugasList.filter((tugas) => {
      const matchSearch = tugas.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchPoints =
        pointRange === "semua"
          ? true
          : pointRange === "1001+"
          ? tugas.points > 1000
          : pointRange === "501-1000"
          ? tugas.points >= 501 && tugas.points <= 1000
          : tugas.points >= 100 && tugas.points <= 500;
      const matchDate =
        !endDate || new Date(tugas.endDate) <= new Date(endDate);
      return matchSearch && matchPoints && matchDate;
    });
    setFilteredTugas(filtered);
    setCurrentPage(1);
  }, [search, pointRange, endDate]);

  const pageCount = Math.ceil(filteredTugas.length / itemsPerPage);
  const currentTugas = filteredTugas.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    search,
    setSearch,
    pointRange,
    setPointRange,
    endDate,
    setEndDate,
    currentTugas,
    currentPage,
    setCurrentPage,
    pageCount,
  };
};

export default useTugas;
