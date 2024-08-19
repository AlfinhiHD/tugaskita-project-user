import {
  ResponseDTO,
  RiwayatRequestTaskType,
  RiwayatUploadTaskType,
  RiwayatReward,
  ReligionTaskSubmitHistoryType,
  ReligionTaskReqHistoryType,
} from '@/app/_constant/global-types';
import KeagamaanService from '@/app/_services/keagamaan-service';
import { useEffect, useState, useMemo } from 'react';
import useSWR from 'swr';
import UploadTaskKeagamaanDialog from '../_components/upload-task-keagamaan-dialog';
import RequestTaskKeagamaanDialog from '../_components/request-task-keagamaan-dialog';

const useRiwayatKeagamaan = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('semua');
  const [dateFilter, setDateFilter] = useState('');
  const [formattedUploadTask, setFormattedUploadTask] = useState<ReligionTaskSubmitHistoryType[]>([]);
  const [formattedRequestTask, setFormattedRequestTask] = useState<ReligionTaskReqHistoryType[]>([]);
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
  } = useSWR<ResponseDTO<ReligionTaskSubmitHistoryType[]>, Error>(['/user-task/riwayat'], () => KeagamaanService.getSubmitReligionTask());

  const {
    data: riwayatRequestTask,
    error: errorRiwayatRequestTask,
    mutate: mutateRiwayatRequestTask,
    isLoading: loadingRiwayatRequestTask,
  } = useSWR<ResponseDTO<ReligionTaskReqHistoryType[]>, Error>(['/user-task/req-riwayat'], () => KeagamaanService.getReqReligionTask());

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

  const filteredUploadTaskData = useMemo(() => {
    return formattedUploadTask.filter((task) => {
      const matchSearch = task.task_name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchStatus = statusFilter === 'semua' || task.status === statusFilter;
      const matchDate = !dateFilter || task.created_at === dateFilter;

      return matchSearch && matchStatus && matchDate;
    });
  }, [formattedUploadTask, searchTerm, statusFilter, dateFilter]);

  const filteredRequestTaskData = useMemo(() => {
    return formattedRequestTask.filter((task) => {
      const matchSearch = task.title?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchStatus = statusFilter === 'semua' || task.status === statusFilter;
      const matchDate = !dateFilter || task.created_at === dateFilter;

      return matchSearch && matchStatus && matchDate;
    });
  }, [formattedRequestTask, searchTerm, statusFilter, dateFilter]);

  const uploadTaskColumns = [
    { key: 'task_name', header: 'Nama Task', sortable: true },
    { key: 'created_at', header: 'Tanggal', sortable: true },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (item: RiwayatUploadTaskType) => (
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium
            ${
              item.status === 'Perlu Review'
                ? 'bg-yellow-400 text-yellow-800'
                : item.status === 'Ditolak'
                ? 'bg-red-400 text-red-800'
                : 'bg-green-400 text-green-800'
            }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: 'actions',
      header: 'Aksi',
      render: (item: RiwayatUploadTaskType) => (
        <UploadTaskKeagamaanDialog task={item} openDialog={openDialog} setOpenDialog={setOpenDialog} />
      ),
    },
  ];

  const requestTaskColumns = [
    { key: 'title', header: 'Judul Pengajuan', sortable: true },
    { key: 'point', header: 'Point', sortable: true },
    { key: 'created_at', header: 'Tanggal', sortable: true },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (item: RiwayatRequestTaskType) => (
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium
            ${
              item.status === 'Perlu Review'
                ? 'bg-yellow-400 text-yellow-800'
                : item.status === 'Ditolak'
                ? 'bg-red-400 text-red-800'
                : 'bg-green-400 text-green-800'
            }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: 'actions',
      header: 'Aksi',
      render: (item: RiwayatUploadTaskType) => (
        <RequestTaskKeagamaanDialog task={item} openDialog={openDialog} setOpenDialog={setOpenDialog} />
      ),
    },
  ];

  const rewardColumns = [
    { key: 'reward_name', header: 'Nama Reward', sortable: true },
    { key: 'created_at', header: 'Tanggal Penukaran', sortable: true },
    {
      key: 'status',
      header: 'Status',
      sortable: true,
      render: (item: RiwayatReward) => (
        <span
          className={`px-2 py-1 rounded-full text-sm font-medium
            ${
              item.status === 'Perlu Review'
                ? 'bg-yellow-400 text-yellow-800'
                : item.status === 'Ditolak'
                ? 'bg-red-400 text-red-800'
                : 'bg-green-400 text-green-800'
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
    uploadTaskColumns,
    requestTaskColumns,
    rewardColumns,
    isLoading: loadingRiwayatUploadTask || loadingRiwayatRequestTask,
    error: errorRiwayatUploadTask || errorRiwayatRequestTask,
  };
};

export default useRiwayatKeagamaan;
