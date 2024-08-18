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

const PenaltyDetailDialog = ({ penalty, openDialog, setOpenDialog }) => {
  if (!penalty) return null;

  return (
    <Dialog
      open={openDialog === penalty.id}
      onOpenChange={(open) => setOpenDialog(open ? penalty.id : null)}
    >
      <DialogTrigger asChild>
        <Button variant="ghost" className="hover:bg-blue-100" size="sm">
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-blue-50">Detail Pelanggaran</DialogTitle>
        </DialogHeader>
        <div className="mt-4 bg-white rounded-lg p-6 text-blue-900">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Nama Pengguna : </span>
            <span className="text-lg font-bold">{penalty.user_name}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Poin Penalty : </span>
            <span className="text-lg font-bold text-red-600">{penalty.point}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Tanggal : </span>
            <span className="text-lg font-bold">{penalty.date}</span>
          </div>
          <div className="mt-8">
            <span className="font-semibold">Deskripsi : </span>
            <p className="mt-2 text-gray-700">{penalty.description}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <DialogClose asChild>
            <Button variant="outline" className="mr-2">Tutup</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PenaltyDetailDialog;