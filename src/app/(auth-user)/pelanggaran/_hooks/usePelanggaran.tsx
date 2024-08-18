import { useState, useMemo } from "react";
import { PenaltyType, ResponseDTO } from "@/app/_constant/global-types";
import useSWR from "swr";
import PenaltyService from "@/app/_services/pelanggaran-service";
import PenaltyDetailDialog from "../_components/pelanggaran-dialog";

const usePelanggaran = () => {
  const [dateFilter, setDateFilter] = useState("");
  const [openDialog, setOpenDialog] = useState(null);

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
        <PenaltyDetailDialog penalty={item} openDialog={openDialog} setOpenDialog={setOpenDialog} />
      ),
    },
  ];

  return {
    dateFilter,
    setDateFilter,
    penaltyData: filteredPenaltyData,
    penaltyColumns,
    isLoading,
    error,
  };
};

export default usePelanggaran;
