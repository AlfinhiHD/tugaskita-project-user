import { useState, useEffect } from "react";

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

const useTukarPoin = () => {
  const [search, setSearch] = useState("");
  const [pointRange, setPointRange] = useState("semua");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredRewards, setFilteredRewards] = useState(rewardsList);
  const itemsPerPage = 6;
  const userPoints = 750; // Contoh poin pengguna

  useEffect(() => {
    const filtered = rewardsList.filter((reward) => {
      const matchSearch = reward.name.toLowerCase().includes(search.toLowerCase());
      const matchPoints =
        pointRange === "semua"
          ? true
          : pointRange === "1001+"
          ? reward.points > 1000
          : pointRange === "501-1000"
          ? reward.points >= 501 && reward.points <= 1000
          : reward.points >= 100 && reward.points <= 500;
      return matchSearch && matchPoints;
    });
    setFilteredRewards(filtered);
    setCurrentPage(1);
  }, [search, pointRange]);

  const pageCount = Math.ceil(filteredRewards.length / itemsPerPage);
  const currentRewards = filteredRewards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    search,
    setSearch,
    pointRange,
    setPointRange,
    currentPage,
    setCurrentPage,
    filteredRewards,
    currentRewards,
    pageCount,
    userPoints,
    itemsPerPage,
  };
};

export default useTukarPoin;