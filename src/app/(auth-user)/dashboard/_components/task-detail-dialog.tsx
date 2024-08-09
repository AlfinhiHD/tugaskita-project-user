import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye, Calendar, Award, ArrowRight } from "lucide-react";
import Link from 'next/link';

const TaskDetailDialog = ({ task }) => {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button variant="ghost" className="hover:bg-blue-100" size="sm">
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{task.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-2 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Deskripsi</h3>
            <p className="text-blue-100">{task.description}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-100" />
              <div>
                <p className="text-sm font-medium">Mulai</p>
                <p className="text-sm text-blue-200">{task.startDate}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-100" />
              <div>
                <p className="text-sm font-medium">Selesai</p>
                <p className="text-sm text-blue-200">{task.endDate}</p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-2 bg-blue-50 p-4 rounded-lg">
            <Award className="h-6 w-6 text-blue-500" />
            <p className="text-lg font-semibold text-blue-700">{task.points} Poin</p>
          </div>
          <Link href={`/tugas/${task.id}`} passHref>
            <Button
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              Selesaikan Tugas
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TaskDetailDialog;