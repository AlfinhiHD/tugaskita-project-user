import { ResponseDTO, RiwayatPointType } from "@/app/_constant/global-types";
import PointService from "@/app/_services/point-service";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import RiwayatPointDialog from "../_components/riwayat-point-dialog";

const useRiwayatPoint = () => {
  const [openDialog, setOpenDialog] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const {
    data: pointHistory,
    error: errorPointHistory,
    mutate: mutatePointHistory,
    isLoading: loadingPointHistory,
  } = useSWR<ResponseDTO<RiwayatPointType[]>, Error>(
    ["user/point-history"],
    () => PointService.getPointHistory()
  );

  const filteredPointHistory = useMemo(() => {
    if (!pointHistory?.data || pointHistory.data.length === 0) {
      return [];
    }
    
    return pointHistory.data.filter((history) => {
      const matchSearch = history.description.toLowerCase().includes(searchTerm.toLowerCase());
      // const matchStatus = statusFilter === 'semua' || history.status === statusFilter;
      // const matchDate = !dateFilter || history.created_at === dateFilter;
  
      return matchSearch;
    });
  }, [pointHistory?.data, searchTerm]);

  const pointHistoryColumns = [
    { key: "user_name", header: "Nama Task", sortable: true },
    { key: "point", header: "Point Berubah", sortable: true },
    { key: "date", header: "Tanggal", sortable: true },
    { key: "description", header: "Keterangan", sortable: true },
    {
      key: "actions",
      header: "Aksi",
      render: (item: RiwayatPointType) => (
        <RiwayatPointDialog
          task={item}
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
        />
      ),
    },
  ];


  return {
    pointHistory: filteredPointHistory,
    errorPointHistory,
    mutatePointHistory,
    loadingPointHistory,
    pointHistoryColumns,
    setSearchTerm,
    searchTerm
  }
};

export default useRiwayatPoint