import {
  ResponseDTO,
  RiwayatReward,
  RiwayatUploadAndRequestTaskType,
} from "@/app/_constant/global-types";
import RewardService from "@/app/_services/reward-service";
import TugasService from "@/app/_services/tugas-service";
import { useEffect, useState, useMemo } from "react";
import useSWR from "swr";

const useRiwayat = () => {
  const [activeTab, setActiveTab] = useState("tugas");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("semua");
  const [typeFilter, setTypeFilter] = useState("semua");
  const [dateFilter, setDateFilter] = useState("");

  const {
    data: riwayatUploadTask,
    error: errorRiwayatUploadTask,
    mutate: mutateRiwayatUploadTask,
    isLoading: loadingRiwayatUploadTask,
  } = useSWR<ResponseDTO<RiwayatUploadAndRequestTaskType[]>, Error>(
    ["/user-task/riwayat"],
    () => TugasService.getUploadTaskHistory()
  );

  const {
    data: riwayatRequestTask,
    error: errorRiwayatRequestTask,
    mutate: mutateRiwayatRequestTask,
    isLoading: loadingRiwayatRequestTask,
  } = useSWR<ResponseDTO<RiwayatUploadAndRequestTaskType[]>, Error>(
    ["/user-task/riwayat"],
    () => TugasService.getRequestTaskHistory()
  );
  
  const {
    data: riwayatReward,
    error: errorRiwayatReward,
    mutate: mutateRiwayatReward,
    isLoading: loadingRiwayatReward,
  } = useSWR<ResponseDTO<RiwayatReward[]>, Error>(
    ["/user-reward/history"],
    () => RewardService.getRewardHistory()
  );

  const filteredTaskData = useMemo(() => {
    const allTasks = [...(riwayatUploadTask?.data || []), ...(riwayatRequestTask?.data || [])];
    
    return allTasks.filter((task) => {
      const matchSearch = task.TaskName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchStatus = statusFilter === "semua" || task.Status === statusFilter;
      const matchType = typeFilter === "semua" || task.Type === typeFilter;
      const matchDate = !dateFilter || task.Timestamp.startsWith(dateFilter);

      return matchSearch && matchStatus && matchType && matchDate;
    });
  }, [riwayatUploadTask, riwayatRequestTask, searchTerm, statusFilter, typeFilter, dateFilter]);

  const filteredRewardData = useMemo(() => {
    return (riwayatReward?.data || []).filter((reward) => {
      const matchSearch = reward.RewardName.toLowerCase().includes(searchTerm.toLowerCase());
      const matchStatus = statusFilter === "semua" || reward.Status === statusFilter;
      const matchDate = !dateFilter || reward.Timestamp.startsWith(dateFilter);

      return matchSearch && matchStatus && matchDate;
    });
  }, [riwayatReward, searchTerm, statusFilter, dateFilter]);

  const taskColumns = [
    { key: "TaskName", header: "Nama Task", sortable: true },
    { key: "Type", header: "Type", sortable: true },
    { key: "Timestamp", header: "Tanggal", sortable: true },
    {
      key: "Status",
      header: "Status",
      sortable: true,
      render: (item: RiwayatUploadAndRequestTaskType) => (
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium
          ${
            item.Status === "Perlu Review"
              ? "bg-yellow-400 text-yellow-800"
              : item.Status === "Ditolak"
              ? "bg-red-400 text-red-800"
              : "bg-green-400 text-green-800"
          }`}
        >
          {item.Status}
        </span>
      ),
    },
  ];

  const rewardColumns = [
    { key: "RewardName", header: "Nama Reward", sortable: true },
    { key: "Timestamp", header: "Tanggal Penukaran", sortable: true },
    {
      key: "Status",
      header: "Status",
      sortable: true,
      render: (item: RiwayatReward) => (
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium
          ${
            item.Status === "Perlu Review"
              ? "bg-yellow-400 text-yellow-800"
              : item.Status === "Ditolak"
              ? "bg-red-400 text-red-800"
              : "bg-green-400 text-green-800"
          }`}
        >
          {item.Status}
        </span>
      ),
    },
  ];

  return {
    activeTab,
    setActiveTab,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    typeFilter,
    setTypeFilter,
    dateFilter,
    setDateFilter,
    taskData: filteredTaskData,
    rewardData: filteredRewardData,
    taskColumns,
    rewardColumns,
    isLoading: loadingRiwayatUploadTask || loadingRiwayatRequestTask || loadingRiwayatReward,
    error: errorRiwayatUploadTask || errorRiwayatRequestTask || errorRiwayatReward,
  };
};

export default useRiwayat;