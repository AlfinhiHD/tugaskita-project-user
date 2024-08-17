import { useState, useMemo } from "react";
import { PenaltyType, ResponseDTO } from "@/app/_constant/global-types";
import useSWR from "swr";
import PenaltyService from "@/app/_services/pelanggaran-service";

const usePelanggaran = () => {
  const [dateFilter, setDateFilter] = useState("");

  const {
    data: penaltyData,
    error,
    isLoading,
  } = useSWR<ResponseDTO<PenaltyType[]>, Error>("/penalty", PenaltyService.getAllPenalty);

  const filteredPenaltyData = useMemo(() => {
    return penaltyData?.data?.filter((penalty) => {
      const matchDate = !dateFilter || penalty.date.includes(dateFilter);
      return matchDate;
    });
  }, [penaltyData, dateFilter]);

  const penaltyColumns = [
    { key: "user_name", header: "Nama Pengguna", sortable: true },
    { key: "point", header: "Poin Penalty", sortable: true },
    { key: "date", header: "Tanggal", sortable: true },
    {
      key: "actions",
      header: "Aksi",
      render: (item: PenaltyType) => (
        <button
          onClick={() => openDetailDialog(item)}
          className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Detail
        </button>
      ),
    },
  ];

  const openDetailDialog = (penalty: PenaltyType) => {
    // Implement dialog opening logic here
    console.log("Opening detail for:", penalty);
  };

  return {
    dateFilter,
    setDateFilter,
    penaltyData: filteredPenaltyData,
    penaltyColumns,
    isLoading,
    error,
    openDetailDialog,
  };
};

export default usePelanggaran;
