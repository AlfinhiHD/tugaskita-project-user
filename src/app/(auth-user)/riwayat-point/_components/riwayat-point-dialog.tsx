import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

const RiwayatPointDialog = ({ task, openDialog, setOpenDialog }) => {
  if (task.status === "Perlu Review" || !task) {
    return null;
  }
  return (
    <Dialog
      open={openDialog === task.id}
      onOpenChange={(open) => setOpenDialog(open ? task.id : null)}
    >
      <DialogTrigger asChild>
        <Button variant="ghost" className="hover:bg-blue-100" size="sm">
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gradient-to-br from-blue-600 to-indigo-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{task.task_name}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 bg-white rounded-lg p-6 text-blue-900">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="font-semibold">Point Berubah:</span>
              <p className="mt-1 text-lg font-bold text-blue-600">{task.point}</p>
            </div>
            <div>
              <span className="font-semibold">Tanggal:</span>
              <p className="mt-1">{task.created_at}</p>
            </div>
          </div>
          {/* <div className="mt-4">
            <span className="font-semibold">Keterangan:</span>
            <p className="mt-2 text-gray-700">{task.description}</p>
          </div> */}
        </div>
        <div className="mt-6 flex justify-end">
          <DialogClose asChild>
            <Button variant="outline" className="text-blue-700 border-white hover:bg-blue-700 hover:text-white">
              Tutup
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RiwayatPointDialog;
