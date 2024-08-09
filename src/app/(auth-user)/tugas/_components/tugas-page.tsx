"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useTugas from "../_hooks/useTugas";
import TugasCard from "./tugas-card";

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
  } = useTugas();

  return (
    <div className="page-wrapper p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-bold text-3xl">Daftar Tugas</h1>
        <Button className="bg-green-500 hover:bg-green-600">
          <Plus className="mr-2 h-4 w-4" /> Ajukan Tugas
        </Button>
      </div>

      <div className="max-w-7xl mx-auto bg-blue-300 p-8 rounded-md">
        <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Input
              placeholder="Cari tugas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-64"
            />
            <Select value={pointRange} onValueChange={setPointRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Pilih rentang poin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="semua">Semua Point</SelectItem>
                <SelectItem value="100-500">100-500 poin</SelectItem>
                <SelectItem value="501-1000">501-1000 poin</SelectItem>
                <SelectItem value="1001+">1001+ poin</SelectItem>
              </SelectContent>
            </Select>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-40"
            />
          </div>

          {pageCount > 1 && (
            <div className="flex items-center space-x-4">
              <Button
                className="font-bold text-xl"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                variant="outline"
              >
                {"<"}
              </Button>
              <span className="font-semibold text-blue-900">
                Halaman {currentPage} dari {pageCount}
              </span>
              <Button
                className="font-bold text-xl"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, pageCount))
                }
                disabled={currentPage === pageCount}
                variant="outline"
              >
                {">"}
              </Button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTugas.map((tugas) => (
            <TugasCard key={tugas.id} tugas={tugas} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TugasPage;
