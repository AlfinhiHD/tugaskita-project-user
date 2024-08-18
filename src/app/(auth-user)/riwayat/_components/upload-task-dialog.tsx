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

const UploadTaskDialog = ({ task, openDialog, setOpenDialog }) => {
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-blue-50">{task.task_name}</DialogTitle>
        </DialogHeader>
        <div className="mt-2 bg-white rounded-lg p-6 text-blue-900">
          <div className="">
            <span className="font-semibold">Pesan : </span>
            <p className="mt-2 text-gray-700">{task.message}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <DialogClose asChild>
            <Button variant="outline" className="mr-2">
              Tutup
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadTaskDialog;
