"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Search,
  Filter,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clipboard,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useTugas from "../_hooks/useTugas";
import TugasCard from "./tugas-card";
import { SkeletonTugasCard } from "@/app/_components/skeletons";
import Image from "next/image";
import Link from "next/link";

const TugasPage = () => {
  const {
    search,
    setSearch,
    pointRange,
    setPointRange,
    endDate,
    setEndDate,
    currentTugas,
    currentPage,
    setCurrentPage,
    pageCount,
    loadingTasks,
  } = useTugas();

  console.log(currentTugas);

  return (
    <div className="page-wrapper bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-0 md:p-8">
      <div className="max-w-7xl mx-auto mt-3">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-bold text-2xl md:text-4xl text-blue-800 flex items-center">
            <Clipboard className="mr-3 h-10 w-10" />
            Daftar Tugas
          </h1>
          <Link href="tugas/ajukan-tugas-form" passHref>
            <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-2 flex items-center">
              <Plus className="mr-2 h-5 w-5" /> Ajukan Tugas
            </Button>
          </Link>
        </div>

        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="relative">
                  <Input
                    placeholder="Cari tugas..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10 pr-4 py-2 w-64 rounded-full"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <div className="relative">
                  <Select value={pointRange} onValueChange={setPointRange}>
                    <SelectTrigger className="w-[200px] rounded-full">
                      <SelectValue placeholder="Pilih rentang poin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="semua">Semua Point</SelectItem>
                      <SelectItem value="100-500">100-500 poin</SelectItem>
                      <SelectItem value="501-1000">501-1000 poin</SelectItem>
                      <SelectItem value="1001+">1001+ poin</SelectItem>
                    </SelectContent>
                  </Select>
                  <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <div className="relative">
                  <Input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="pl-10 pr-4 py-2 w-48 rounded-full"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              {pageCount > 1 && (
                <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-full p-1">
                  <Button
                    className="rounded-full w-10 h-10 p-0"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    variant="ghost"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <span className="font-semibold text-white px-3">
                    {currentPage} / {pageCount}
                  </span>
                  <Button
                    className="rounded-full w-10 h-10 p-0"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, pageCount))
                    }
                    disabled={currentPage === pageCount}
                    variant="ghost"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          <div className="p-6">
            {loadingTasks ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array(6)
                  .fill(0)
                  .map((_, index) => (
                    <SkeletonTugasCard key={index} />
                  ))}
              </div>
            ) : currentTugas && currentTugas.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentTugas.map((tugas) => (
                  <TugasCard key={tugas.id} tugas={tugas} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8">
                <Image
                  src="/assets/images/zerodata.jpg"
                  alt="Data tidak tersedia"
                  width={300}
                  height={300}
                />
                <p className="mt-4 text-lg font-medium text-gray-600">
                  Maaf, data tidak tersedia.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TugasPage;
