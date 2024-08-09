"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MainTable from "@/app/_components/main-table";
import { Coins, ClipboardList } from "lucide-react";
import useDashboard from "../_hooks/useDashboard";

const Dashboard = () => {
  const { todaysTasks, columns } = useDashboard();

  return (
    <div className="p-8">
      <h1 className="font-bold text-3xl mb-8">Dashboard</h1>
      <div className="bg-blue-100 p-6 rounded-lg">
        <div className="flex items-center mb-8 bg-blue-300 rounded-md p-6 ">
          <div className="flex items-center mr-12">
            <Coins className="w-12 h-12 mr-4" />
            <div>
              <p className="text-lg font-semibold">Total Poin</p>
              <p className="text-lg">
                Anda memiliki <span className="font-bold text-xl">1250</span>{" "}
                poin
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 mb-8 flex items-center">
          <ClipboardList className="w-8 h-8 mr-2" />
          <h2 className="text-xl font-bold">Tugas Hari Ini</h2>
        </div>

        <Card className="w-full bg-white">
          <CardContent className="overflow-x-auto">
            <MainTable
              columns={columns}
              data={todaysTasks}
              searchable={false}
              itemsPerPage={5}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
