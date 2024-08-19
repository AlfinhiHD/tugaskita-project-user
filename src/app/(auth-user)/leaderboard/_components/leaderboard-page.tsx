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
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400" />;
      case 2:
        return <Medal className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-700" />;
      default:
        return <Star className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />;
    }
  };

  return (
    <div className="page-wrapper bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen p-4 sm:p-8">
      <div className="max-w-4xl mx-auto mt-3">
        <h1 className="font-bold text-3xl sm:text-4xl mt-3 mb-8 text-purple-800 flex items-center">
          <Trophy className="mr-3 h-8 w-8 sm:h-10 sm:w-10" />
          Top 15 Leaderboard
        </h1>

        <Card className="bg-white shadow-xl rounded-xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl font-bold flex items-center">
              <Star className="w-6 h-6 sm:w-8 sm:h-8 mr-3" />
              Peringkat Siswa Terbaik
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            {isLoading ? (
              <LeaderboardSkeleton />
            ) : (
              <ul className="space-y-3 sm:space-y-4">
                {leaderboard.map((student, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-x-2 sm:gap-x-4 bg-gradient-to-r from-purple-100 to-indigo-100 p-3 sm:p-4 rounded-lg transition-all duration-300 hover:shadow-md"
                  >
                    <span className="text-lg sm:text-2xl font-bold text-gray-700 w-6 sm:w-8 text-center">
                      {index + 1}
                    </span>
                    {getRankIcon(index + 1)}
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center text-white font-bold text-sm sm:text-xl">
                      {student.name.charAt(0)}
                    </div>
                    <div className="flex-grow flex items-center justify-between">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <p className="font-semibold text-sm sm:text-lg text-gray-800 truncate max-w-[100px] sm:max-w-[200px]">
                              {student.name}
                            </p>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{student.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <p className="text-sm sm:text-lg font-bold text-indigo-600">
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