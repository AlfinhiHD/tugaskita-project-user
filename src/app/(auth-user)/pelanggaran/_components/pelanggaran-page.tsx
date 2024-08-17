"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Search, Calendar, AlertTriangle } from "lucide-react";
import usePelanggaran from "../_hooks/usePelanggaran";
import MainTable from "@/app/_components/main-table";
import { PenaltyPageSkeleton } from "@/app/_components/skeletons";

const PelanggaranPage = () => {
  const {
    dateFilter,
    setDateFilter,
    penaltyData,
    penaltyColumns,
    isLoading,
    error,
  } = usePelanggaran();

  if (isLoading) {
    return <PenaltyPageSkeleton />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="page-wrapper bg-gradient-to-br from-red-50 to-orange-100 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-800 mb-4 sm:mb-6 md:mb-8 flex items-center">
          <AlertTriangle className="mr-2 sm:mr-3 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
          <span className="break-words">
            Daftar Pelanggaran
          </span>
        </h1>

        <div className="bg-white shadow-xl rounded-md overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
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
            <div className="overflow-x-auto">
              {penaltyData && penaltyData.length > 0 ? (
                <MainTable
                  columns={penaltyColumns}
                  data={penaltyData}
                  searchable={false}
                />
              ) : (
                <div className="text-center py-8 text-gray-500">
                  Tidak ada data pelanggaran.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PelanggaranPage;