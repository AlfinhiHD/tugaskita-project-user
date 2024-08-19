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
import { Search, History, Calendar } from "lucide-react";
import useRiwayatKeagamaan from "../_hooks/useRiwayatKeagamaan";
import MainTable from "@/app/_components/main-table";
import { RiwayatPageSkeleton } from "@/app/_components/skeletons";
import Image from "next/image";

const RiwayatKeagamaanPage = () => {
  const {
    activeTab,
    setActiveTab,
    searchTerm,
    setSearchTerm,
    statusFilter,
    setStatusFilter,
    dateFilter,
    setDateFilter,
    uploadTaskData,
    requestTaskData,
    uploadTaskColumns,
    requestTaskColumns,
    isLoading,
    error,
  } = useRiwayatKeagamaan();

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

  const renderFilters = () => (
    <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
      <div className="relative w-full sm:w-auto">
        <Input
          placeholder="Cari..."
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
  );

  return (
    <div className="page-wrapper bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-800 mb-4 sm:mb-6 md:mb-8 flex items-center">
          <History className="mr-2 sm:mr-3 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
          <span className="break-words">
            Riwayat Tugas Keagamaan
          </span>
        </h1>

        <div className="bg-white shadow-xl rounded-md overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="flex flex-col sm:flex-row w-full h-auto bg-white rounded-t-md overflow-hidden">
              <TabsTrigger
                value="upload"
                className="w-full py-2 px-4 text-sm sm:text-base text-blue-600 hover:bg-blue-50 transition-colors duration-200 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Upload Tugas
              </TabsTrigger>
              <TabsTrigger
                value="request"
                className="w-full py-2 px-4 text-sm sm:text-base text-blue-600 hover:bg-blue-50 transition-colors duration-200 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                Pengajuan Tugas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="upload" className="p-4 sm:p-6">
              {renderFilters()}
              <div className="overflow-x-auto">
                {uploadTaskData.length > 0 ? (
                  <MainTable
                    columns={uploadTaskColumns}
                    data={uploadTaskData}
                    searchable={false}
                  />
                ) : (
                  renderZeroData()
                )}
              </div>
            </TabsContent>

            <TabsContent value="request" className="p-4 sm:p-6">
              {renderFilters()}
              <div className="overflow-x-auto">
                {requestTaskData.length > 0 ? (
                  <MainTable
                    columns={requestTaskColumns}
                    data={requestTaskData}
                    searchable={false}
                  />
                ) : (
                  renderZeroData()
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default RiwayatKeagamaanPage;
