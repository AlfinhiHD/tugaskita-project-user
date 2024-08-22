"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MainTable from "@/app/_components/main-table";
import { Coins, ClipboardList, ClipboardCheck, BarChart2, School, Users } from "lucide-react";
import useDashboard from "../_hooks/useDashboard";
import { StatCardSkeleton, TableSkeleton } from "@/app/_components/skeletons";

const Dashboard = () => {
  const {
    todaysTasks,
    columns,
    profilePoint,
    loadingProfile,
    loadingTasks,
    loadingTaskDone,
    taskDone,
    profile,
  } = useDashboard();

  return (
    <div className="page-wrapper bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto mt-3">
        <h1 className="font-bold text-4xl mt-3 mb-8 text-blue-800 flex items-center">
          <BarChart2 className="mr-3 h-10 w-10" />
          Dashboard
        </h1>

        {loadingProfile ? (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
          </div>
        ) : (
          <Card className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                Selamat datang, {profile?.name}!
              </h2>
              <div className="flex flex-wrap items-center text-gray-600">
                <div className="flex items-center mr-6 mb-2">
                  <School className="w-5 h-5 mr-2 text-blue-500" />
                  <span>{profile?.school}</span>
                </div>
                <div className="flex items-center mb-2">
                  <Users className="w-5 h-5 mr-2 text-blue-500" />
                  <span>Kelas {profile?.class}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {loadingProfile && loadingTaskDone ? (
            <>
              <StatCardSkeleton />
              <StatCardSkeleton />
            </>
          ) : (
            <>
              <Card className="bg-gradient-to-br from-green-400 to-blue-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex items-center p-6">
                  <Coins className="w-16 h-16 mr-6 bg-white text-green-500 rounded-full p-3" />
                  <div>
                    <p className="text-xl font-semibold mb-1">Total Poin</p>
                    <p className="text-3xl font-bold">{profilePoint} poin</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-400 to-pink-500 text-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex items-center p-6">
                  <ClipboardCheck className="w-16 h-16 mr-6 bg-white text-purple-500 rounded-full p-3" />
                  <div>
                    <p className="text-xl font-semibold mb-1">
                      Tugas Diselesaikan
                    </p>
                    <p className="text-3xl font-bold">{taskDone} tugas</p>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>

        <Card className="bg-white shadow-xl rounded-xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
            <CardTitle className="text-2xl font-bold flex items-center">
              <ClipboardList className="w-8 h-8 mr-3" />
              Tugas Tersedia
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {loadingTasks ? (
              <TableSkeleton />
            ) : (
              <MainTable
                columns={columns}
                data={todaysTasks}
                searchable={false}
                itemsPerPage={5}
              />
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;