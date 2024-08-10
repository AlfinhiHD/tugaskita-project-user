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
  } = useRiwayat();

  return (
    <div className="page-wrapper bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-8">
      <div className="mx-auto mt-3">
        <h1 className="font-bold text-4xl text-blue-800 mb-8 flex items-center">
          <History className="mr-3 h-10 w-10" />
          Riwayat Pengajuan Tugas dan Penukaran Reward
        </h1>

        <div className="bg-white shadow-xl rounded-md overflow-hidden">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2 w-full">
              <TabsTrigger
                value="tugas"
                className="flex-1 text-white data-[state=active]:bg-white data-[state=active]:text-blue-800"
              >
                Submit dan Pengajuan Tugas
              </TabsTrigger>
              <TabsTrigger
                value="reward"
                className="flex-1 text-white data-[state=active]:bg-white data-[state=active]:text-blue-800"
              >
                Penukaran Reward
              </TabsTrigger>
            </TabsList>
            <TabsContent value="tugas" className="p-6">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="relative">
                  <Input
                    placeholder="Cari nama tugas..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-64 rounded-full"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[200px] rounded-full">
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
                  <SelectTrigger className="w-[200px] rounded-full">
                    <SelectValue placeholder="Filter by Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="semua">Semua Type</SelectItem>
                    <SelectItem value="Submit">Submit</SelectItem>
                    <SelectItem value="Pengajuan">Pengajuan</SelectItem>
                  </SelectContent>
                </Select>
                <div className="relative">
                  <Input
                    type="date"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="pl-10 pr-4 py-2 w-48 rounded-full"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <MainTable
                columns={taskColumns}
                data={taskData}
                searchable={false}
              />
            </TabsContent>

            <TabsContent value="reward" className="p-6">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="relative">
                  <Input
                    placeholder="Cari nama reward..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-64 rounded-full"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-[200px] rounded-full">
                    <SelectValue placeholder="Filter by Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="semua">Semua Status</SelectItem>
                    <SelectItem value="Perlu Review">Perlu Review</SelectItem>
                    <SelectItem value="Ditolak">Ditolak</SelectItem>
                    <SelectItem value="Diterima">Diterima</SelectItem>
                  </SelectContent>
                </Select>
                <div className="relative">
                  <Input
                    type="date"
                    value={dateFilter}
                    onChange={(e) => setDateFilter(e.target.value)}
                    className="pl-10 pr-4 py-2 w-48 rounded-full"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
              <MainTable
                columns={rewardColumns}
                data={rewardData}
                searchable={false}
              />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default RiwayatPage;
