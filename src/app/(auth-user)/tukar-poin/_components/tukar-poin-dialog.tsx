import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

const TukarPoinDialog = ({ reward, userPoints, onExchange }) => {
  const isPointsSufficient = userPoints >= reward.points;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-blue-500 hover:bg-blue-600">Tukar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-white">Tukar {reward.name}</DialogTitle>
          <DialogDescription className="text-blue-200">
            Apakah Anda yakin ingin menukar poin Anda dengan reward ini?
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 bg-blue-100 rounded-lg p-6 text-blue-900">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Poin Anda</span>
            <span className="text-2xl font-bold">{userPoints}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold">Poin Dibutuhkan</span>
            <span className="text-2xl font-bold">{reward.points}</span>
          </div>
          {isPointsSufficient ? (
            <div className="bg-green-100 border-l-4 border-green-500 p-4 mt-4">
              <p className="text-green-700">
                Poin Anda cukup! Sisa poin setelah penukaran:
              </p>
              <p className="text-2xl font-bold text-green-800">
                {userPoints - reward.points} poin
              </p>
            </div>
          ) : (
            <div className="bg-red-100 border-l-4 border-red-500 p-4 mt-4">
              <p className="text-red-700">
                Poin Anda tidak mencukupi untuk menukar reward ini.
              </p>
              <p className="text-2xl font-bold text-red-800">
                Kurang {reward.points - userPoints} poin
              </p>
            </div>
          )}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Batal</Button>
          </DialogClose>
          <Button
            disabled={!isPointsSufficient}
            onClick={() => {
              onExchange(reward);
            }}
          >
            Tukar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TukarPoinDialog;
