"use client";

import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, ChevronLeft, ChevronRight, Gift } from "lucide-react";
import useTukarPoin from "../_hooks/useTukarPoin";
import RewardCard from "./tukar-poin-card";
import { TukarPoinPageSkeleton } from "@/app/_components/skeletons";
import Image from "next/image";

const TukarPoinPage = () => {
  const {
    search,
    setSearch,
    pointRange,
    setPointRange,
    currentPage,
    setCurrentPage,
    currentRewards,
    pageCount,
    userPoints,
    loadingReward,
    loadingProfile,
  } = useTukarPoin();

  const handleExchange = (reward) => {
    console.log("Reward ditukar:", reward);
  };

  if (currentRewards && loadingReward && loadingProfile) {
    return <TukarPoinPageSkeleton />;
  }

  return (
    <div className="page-wrapper bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto mt-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-8 space-y-4 sm:space-y-0">
          <h1 className="font-bold text-xl sm:text-2xl md:text-4xl text-blue-800 flex items-center">
            <Gift className="mr-2 sm:mr-3 h-8 w-8 sm:h-10 sm:w-10" />
            Tukar Poin
          </h1>
          <div className="bg-gradient-to-r from-green-400 to-blue-500 p-1 rounded-lg shadow-lg self-start sm:self-auto">
            <span className="block bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-md text-sm sm:text-lg">
              Poin Anda: <b className="text-green-600">{userPoints}</b> Poin
            </span>
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="relative">
                  <Input
                    placeholder="Cari reward..."
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
            {currentRewards && currentRewards.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentRewards.map((reward) => (
                  <RewardCard
                    key={reward.id}
                    reward={reward}
                    userPoints={userPoints}
                    onExchange={handleExchange}
                  />
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

export default TukarPoinPage;
