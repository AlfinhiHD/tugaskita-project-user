"use client";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, Calendar, History } from "lucide-react";
import useRiwayat from "../_hooks/useRiwayat";
import MainTable from "@/app/_components/main-table";
import { RiwayatPageSkeleton } from "@/app/_components/skeletons";
import Image from "next/image";

const RiwayatPage = () => {
  const {
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
    rewardColumns,
    isLoading,
    error,
  } = useRiwayat();

  if (isLoading) {
    return <RiwayatPageSkeleton />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const renderZeroData = () => (
    <div className="flex flex-col items-center justify-center py-8">
      <Image
        src="/assets/images/zerodata.jpg"
        alt="Data tidak tersedia"
        width={300}
        height={300}
      />
      <p className="mt-4 text-lg font-medium text-gray-600 text-center px-4">
        Maaf, data tidak tersedia.
      </p>
    </div>
  );

  return (
    <div className="page-wrapper bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="mx-auto mt-3">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-800 mb-4 sm:mb-6 md:mb-8 flex items-center">
          <History className="mr-2 sm:mr-3 h-8 w-8 sm:h-10 sm:w-10" />
          <span className="break-words">
            Riwayat Pengajuan Tugas dan Penukaran Reward
          </span>
        </h1>

        <div className="bg-white shadow-xl rounded-md overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-gradient-to-r from-blue-600 to-indigo-600 p-1 sm:p-2 w-full">
              <TabsTrigger
                value="tugas"
                className="flex-1 text-white data-[state=active]:bg-white data-[state=active]:text-blue-800 text-xs sm:text-sm md:text-base"
              >
                Submit dan Pengajuan Tugas
              </TabsTrigger>
              <TabsTrigger
                value="reward"
                className="flex-1 text-white data-[state=active]:bg-white data-[state=active]:text-blue-800 text-xs sm:text-sm md:text-base"
              >
                Penukaran Reward
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tugas" className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="relative w-full sm:w-auto">
                  <Input
                    placeholder="Cari nama tugas..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full sm:w-64 rounded-full"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-[200px] rounded-full">
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="semua">Semua Status</SelectItem>
                    <SelectItem value="Perlu Review">Perlu Review</SelectItem>
                    <SelectItem value="Ditolak">Ditolak</SelectItem>
                    <SelectItem value="Diterima">Diterima</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-full sm:w-[200px] rounded-full">
                    <SelectValue placeholder="Filter by Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="semua">Semua Type</SelectItem>
                    <SelectItem value="Submit">Submit</SelectItem>
                    <SelectItem value="Pengajuan">Pengajuan</SelectItem>
                  </SelectContent>
                </Select>
                <div className="relative w-full sm:w-auto">
                  <Input
                    type="date"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full sm:w-48 rounded-full"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              {taskData.length > 0 ? (
                <MainTable
                  columns={taskColumns}
                  data={taskData}
                  searchable={false}
                />
              ) : (
                renderZeroData()
              )}
            </TabsContent>

            <TabsContent value="reward" className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="relative w-full sm:w-auto">
                  <Input
                    placeholder="Cari nama reward..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full sm:w-64 rounded-full"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-full sm:w-[200px] rounded-full">
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="semua">Semua Status</SelectItem>
                    <SelectItem value="Perlu Review">Perlu Review</SelectItem>
                    <SelectItem value="Ditolak">Ditolak</SelectItem>
                    <SelectItem value="Diterima">Diterima</SelectItem>
                  </SelectContent>
                </Select>
                <div className="relative w-full sm:w-auto">
                  <Input
                    type="date"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full sm:w-48 rounded-full"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              {rewardData.length > 0 ? (
                <MainTable
                  columns={rewardColumns}
                  data={rewardData}
                  searchable={false}
                />
              ) : (
                renderZeroData()
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default RiwayatPage;
