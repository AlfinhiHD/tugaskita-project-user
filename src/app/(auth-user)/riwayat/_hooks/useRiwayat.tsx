import {
  ResponseDTO,
  RiwayatRequestTaskType,
  RiwayatUploadTaskType,
  RiwayatReward,
} from "@/app/_constant/global-types";
import RewardService from "@/app/_services/reward-service";
import TugasService from "@/app/_services/tugas-service";
import { useEffect, useState, useMemo } from "react";
import useSWR from "swr";
import UploadTaskDialog from "../_components/upload-task-dialog";
import RequestTaskDialog from "../_components/request-task-dialog";

const useRiwayat = () => {
  const [activeTab, setActiveTab] = useState("upload");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("semua");
  const [dateFilter, setDateFilter] = useState("");
  const [formattedUploadTask, setFormattedUploadTask] = useState<
    RiwayatUploadTaskType[]
  >([]);
  const [formattedRequestTask, setFormattedRequestTask] = useState<
    RiwayatRequestTaskType[]
  >([]);
  const [formattedReward, setFormattedReward] = useState<RiwayatReward[]>([]);
  const [openDialog, setOpenDialog] = useState(null);

  const formatDate = (dateString: string) => {
    return dateString.substring(0, 10);
  };

  const {
    data: riwayatUploadTask,
    error: errorRiwayatUploadTask,
    mutate: mutateRiwayatUploadTask,
    isLoading: loadingRiwayatUploadTask,
  } = useSWR<ResponseDTO<RiwayatUploadTaskType[]>, Error>(
    ["/user-task/riwayat"],
    () => TugasService.getUploadTaskHistory()
  );

  const {
    data: riwayatRequestTask,
    error: errorRiwayatRequestTask,
    mutate: mutateRiwayatRequestTask,
    isLoading: loadingRiwayatRequestTask,
  } = useSWR<ResponseDTO<RiwayatRequestTaskType[]>, Error>(
    ["/user-task/req-riwayat"],
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

  useEffect(() => {
    if (riwayatUploadTask?.data) {
      setFormattedUploadTask(
        riwayatUploadTask.data.map((task) => ({
          ...task,
          created_at: formatDate(task.created_at),
        }))
      );
    }
  }, [riwayatUploadTask]);

  useEffect(() => {
    if (riwayatRequestTask?.data) {
      setFormattedRequestTask(
        riwayatRequestTask.data.map((task) => ({
          ...task,
          created_at: formatDate(task.created_at),
        }))
      );
    }
  }, [riwayatRequestTask]);

  useEffect(() => {
    if (riwayatReward?.data) {
      setFormattedReward(
        riwayatReward.data.map((reward) => ({
          ...reward,
          created_at: formatDate(reward.created_at),
        }))
      );
    }
  }, [riwayatReward]);

  const filteredUploadTaskData = useMemo(() => {
    return formattedUploadTask.filter((task) => {
      const matchSearch = task.task_name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchStatus = statusFilter === "semua" || task.status === statusFilter;
      const matchDate = !dateFilter || task.created_at === dateFilter;
  
      return matchSearch && matchStatus && matchDate;
    });
  }, [formattedUploadTask, searchTerm, statusFilter, dateFilter]);

  const filteredRequestTaskData = useMemo(() => {
    return formattedRequestTask.filter((task) => {
      const matchSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchStatus = statusFilter === "semua" || task.status === statusFilter;
      const matchDate = !dateFilter || task.created_at === dateFilter;
  
      return matchSearch && matchStatus && matchDate;
    });
  }, [formattedRequestTask, searchTerm, statusFilter, dateFilter]);
  
  const filteredRewardData = useMemo(() => {
    return formattedReward.filter((reward) => {
      const matchSearch = reward.reward_name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchStatus = statusFilter === "semua" || reward.status === statusFilter;
      const matchDate = !dateFilter || reward.created_at === dateFilter;
  
      return matchSearch && matchStatus && matchDate;
    });
  }, [formattedReward, searchTerm, statusFilter, dateFilter]);

  const uploadTaskColumns = [
    { key: "task_name", header: "Nama Task", sortable: true },
    { key: "created_at", header: "Tanggal", sortable: true },
    {
      key: "status",
      header: "Status",
      sortable: true,
      render: (item: RiwayatUploadTaskType) => (
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium
          ${
            item.status === "Perlu Review"
              ? "bg-yellow-400 text-yellow-800"
              : item.status === "Ditolak"
              ? "bg-red-400 text-red-800"
              : "bg-green-400 text-green-800"
          }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Aksi",
      render: (item: RiwayatUploadTaskType) => (
        <UploadTaskDialog task={item} openDialog={openDialog} setOpenDialog={setOpenDialog} />
      ),
    },
  ];

  const requestTaskColumns = [
    { key: "title", header: "Judul Pengajuan", sortable: true },
    { key: "point", header: "Point", sortable: true },
    { key: "created_at", header: "Tanggal", sortable: true },
    {
      key: "status",
      header: "Status",
      sortable: true,
      render: (item: RiwayatRequestTaskType) => (
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium
          ${
            item.status === "Perlu Review"
              ? "bg-yellow-400 text-yellow-800"
              : item.status === "Ditolak"
              ? "bg-red-400 text-red-800"
              : "bg-green-400 text-green-800"
          }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Aksi",
      render: (item: RiwayatUploadTaskType) => (
        <RequestTaskDialog task={item} openDialog={openDialog} setOpenDialog={setOpenDialog} />
      ),
    },
  ];
  
  const rewardColumns = [
    { key: "reward_name", header: "Nama Reward", sortable: true },
    { key: "created_at", header: "Tanggal Penukaran", sortable: true },
    {
      key: "status",
      header: "Status",
      sortable: true,
      render: (item: RiwayatReward) => (
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium
          ${
            item.status === "Perlu Review"
              ? "bg-yellow-400 text-yellow-800"
              : item.status === "Ditolak"
              ? "bg-red-400 text-red-800"
              : "bg-green-400 text-green-800"
          }`}
        >
          {item.status}
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
    dateFilter,
    setDateFilter,
    uploadTaskData: filteredUploadTaskData,
    requestTaskData: filteredRequestTaskData,
    rewardData: filteredRewardData,
    uploadTaskColumns,
    requestTaskColumns,
    rewardColumns,
    isLoading: loadingRiwayatUploadTask || loadingRiwayatRequestTask || loadingRiwayatReward,
    error: errorRiwayatUploadTask || errorRiwayatRequestTask || errorRiwayatReward,
  };
};

export default useRiwayat;
