"use client";

import MainTable from "@/app/_components/main-table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { History, Search } from "lucide-react";
import Image from "next/image";
import useRiwayatPoint from "../_hooks/useRiwayatPoint";
import { RiwayatPageSkeleton } from "@/app/_components/skeletons";

const RiwayatPointPage = () => {
    const {
      pointHistory,
      errorPointHistory,
      mutatePointHistory,
      loadingPointHistory,
      pointHistoryColumns,
      setSearchTerm,
      searchTerm
    } = useRiwayatPoint();
  
    if (loadingPointHistory) {
      return <RiwayatPageSkeleton />;
    }
  
    if (errorPointHistory) {
      return <div>Error: {errorPointHistory.message}</div>;
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
        <div className="mx-auto max-w-7xl">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-800 mb-6 flex items-center">
            <History className="mr-3 h-8 w-8 sm:h-10 sm:w-10" />
            <span>Riwayat Point</span>
          </h1>
  
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
                <div className="relative w-full sm:w-64">
                  <Input
                    placeholder="Cari berdasarkan keterangan..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full rounded-full"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <Button
                  onClick={() => mutatePointHistory()}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Refresh Data
                </Button>
              </div>
        
              <div className="overflow-x-auto">
                {pointHistory.length > 0 ? (
                  <MainTable
                    columns={pointHistoryColumns}
                    data={pointHistory}
                    searchable={false}
                  />
                ) : (
                  renderZeroData()
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default RiwayatPointPage;