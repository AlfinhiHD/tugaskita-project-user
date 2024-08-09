import { useState } from 'react';

const useRiwayat = () => {
  const [activeTab, setActiveTab] = useState('tugas');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('semua');
  const [typeFilter, setTypeFilter] = useState('semua');
  const [dateFilter, setDateFilter] = useState('');

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

  const taskColumns = [
    { key: "name", header: "Nama Task", sortable: true },
    { key: "points", header: "Point", sortable: true },
    { key: "type", header: "Type", sortable: true },
    { key: "date", header: "Tanggal", sortable: true },
    { 
      key: "status", 
      header: "Status", 
      sortable: true,
      render: (item) => (
        <span className={`px-2 py-1 rounded-full text-sm font-medium
          ${item.status === 'Perlu Review' ? 'bg-yellow-400 text-yellow-800' : 
            item.status === 'Ditolak' ? 'bg-red-400 text-red-800' :
            'bg-green-400 text-green-800'}`}>
          {item.status}
        </span>
      )
    },
  ];

  const rewardColumns = [
    { key: "name", header: "Nama Reward", sortable: true },
    { key: "date", header: "Tanggal Penukaran", sortable: true },
    { 
      key: "status", 
      header: "Status", 
      sortable: true,
      render: (item) => (
        <span className={`px-2 py-1 rounded-full text-sm font-medium
          ${item.status === 'Perlu Review' ? 'bg-yellow-400 text-yellow-800' : 
            item.status === 'Ditolak' ? 'bg-red-400 text-red-800' :
            'bg-green-400 text-green-800'}`}>
          {item.status}
        </span>
      )
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
    taskData,
    rewardData,
    taskColumns,
    rewardColumns
  };
};

export default useRiwayat;