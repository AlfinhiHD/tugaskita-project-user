import { ResponseDTO, RiwayatPointType } from "@/app/_constant/global-types";
import PointService from "@/app/_services/point-service";
import { useEffect, useMemo, useState } from "react";
import useSWR from "swr";
import RiwayatPointDialog from "../_components/riwayat-point-dialog";
import { headers } from "next/headers";

const useRiwayatPoint = () => {
  const [openDialog, setOpenDialog] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("semua");
  const [dateFilter, setDateFilter] = useState("");
  const [formattedPointHistory, setFormattedPointHistory] = useState<
    RiwayatPointType[]
  >([]);

  const {
    data: pointHistory,
    error: errorPointHistory,
    mutate: mutatePointHistory,
    isLoading: loadingPointHistory,
  } = useSWR<ResponseDTO<RiwayatPointType[]>, Error>(
    ["user/point-history"],
    () => PointService.getPointHistory()
  );

  const formatDate = (dateString: string) => {
    return dateString.substring(0, 10);
  };

  useEffect(() => {
    if (pointHistory?.data) {
      setFormattedPointHistory(
        pointHistory.data.map((task) => ({
          ...task,
          created_at: formatDate(task.created_at),
        }))
      );
    }
  }, [pointHistory]);

  const filteredPointHistory = useMemo(() => {
    if (!formattedPointHistory || formattedPointHistory.length === 0) {
      return [];
    }

    return formattedPointHistory.filter((history) => {
      const matchSearch = history.task_name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchStatus =
        statusFilter === "semua" || history.type === statusFilter;
      const matchDate = !dateFilter || history.created_at === dateFilter;

      return matchSearch && matchStatus && matchDate;
    });
  }, [formattedPointHistory, searchTerm]);

  const pointHistoryColumns = [
    { key: "task_name", header: "Nama Task", sortable: true },
    { key: "point", header: "Point Berubah", sortable: true },
    { key: "created_at", header: "Tanggal", sortable: true },
    {
      key: "type",
      header: "Type",
      sortable: true,
      render: (item: RiwayatPointType) => (
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium
          ${
            item.type === "Penalty"
              ? "bg-red-400 text-red-800"
              : "bg-green-400 text-green-800"
          }`}
        >
          {item.type}
        </span>
      ),
    },
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
    searchTerm,
  };
};

export default useRiwayatPoint;
