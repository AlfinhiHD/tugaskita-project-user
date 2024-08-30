"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Medal, Star } from "lucide-react";
import useLeaderboard from "../_hooks/useLeaderboard";
import { LeaderboardSkeleton } from "@/app/_components/skeletons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Leaderboard = () => {
  const { leaderboard, isLoading } = useLeaderboard();

  const getRankIcon = (rank) => {
    const baseClasses = "w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8";
    switch (rank) {
      case 1:
        return <Trophy className={`${baseClasses} text-yellow-400`} />;
      case 2:
        return <Medal className={`${baseClasses} text-gray-400`} />;
      case 3:
        return <Medal className={`${baseClasses} text-yellow-700`} />;
      default:
        return <Star className={`${baseClasses} text-blue-400`} />;
    }
  };

  return (
    <div className="page-wrapper bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen p-2 sm:p-4 md:p-8">
      <div className="max-w-4xl mx-auto mt-2 sm:mt-3">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-3 mb-4 sm:mb-6 md:mb-8 text-purple-800 flex items-center">
          <Trophy className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10" />
          Top 15 Leaderboard
        </h1>

        <Card className="bg-white shadow-xl rounded-xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-3 sm:p-4 md:p-6">
            <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold flex items-center">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mr-2 sm:mr-3" />
              Peringkat Siswa Terbaik
            </CardTitle>
          </CardHeader>
          <CardContent className="p-2 sm:p-4 md:p-6">
            {isLoading ? (
              <LeaderboardSkeleton />
            ) : (
              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                {leaderboard.map((student, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-x-1 sm:gap-x-2 md:gap-x-4 bg-gradient-to-r from-purple-100 to-indigo-100 p-2 sm:p-3 md:p-4 rounded-lg transition-all duration-300 hover:shadow-md"
                  >
                    <span className="text-base sm:text-lg md:text-2xl font-bold text-gray-700 w-4 sm:w-6 md:w-8 text-center">
                      {index + 1}
                    </span>
                    {getRankIcon(index + 1)}
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-xl">
                      {student.name.charAt(0)}
                    </div>
                    <div className="flex-grow flex items-center justify-between">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <p className="font-semibold text-xs sm:text-sm md:text-lg text-gray-800 truncate max-w-[8rem] sm:max-w-[11rem] md:max-w-[13rem]">
                              {student.name}
                            </p>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{student.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <p className="text-xs sm:text-sm md:text-lg font-bold text-indigo-600">
                        {student.point} poin
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Leaderboard;