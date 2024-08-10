import React, { useState } from "react";
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
import Swal from "sweetalert2";
import instance from "@/app/_utils/axios.instance";

const TukarPoinDialog = ({ reward, userPoints, onExchange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isPointsSufficient = userPoints >= reward.Price;

  const handleExchange = async () => {
    const result = await Swal.fire({
      title: 'Konfirmasi',
      text: "Apakah Anda yakin ingin menukar poin Anda dengan reward ini?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, tukar!',
      cancelButtonText: 'Batal'
    });

    if (result.isConfirmed) {
      setIsSubmitting(true);
      try {
        const response = await instance.post("/user-reward/exchange", {
          reward_id: reward.Id
        });

        if (response.data.message === "succes upload request reward") {
          Swal.fire('Berhasil!', 'Penukaran reward berhasil.', 'success');
          onExchange(reward);
          return true;
        } else {
          Swal.fire('Gagal', 'Terjadi kesalahan saat menukar reward.', 'error');
        }
      } catch (error) {
        console.error("Error exchanging reward:", error);
        Swal.fire('Error', 'Terjadi kesalahan saat menukar reward.', 'error');
      } finally {
        setIsSubmitting(false);
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    }
    return false;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-blue-500 hover:bg-blue-600">Tukar</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-white">Tukar {reward.Name}</DialogTitle>
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
            <span className="text-2xl font-bold">{reward.Price}</span>
          </div>
          {isPointsSufficient ? (
            <div className="bg-green-100 border-l-4 border-green-500 p-4 mt-4">
              <p className="text-green-700">
                Poin Anda cukup! Sisa poin setelah penukaran:
              </p>
              <p className="text-2xl font-bold text-green-800">
                {userPoints - reward.Price} poin
              </p>
            </div>
          ) : (
            <div className="bg-red-100 border-l-4 border-red-500 p-4 mt-4">
              <p className="text-red-700">
                Poin Anda tidak mencukupi untuk menukar reward ini.
              </p>
              <p className="text-2xl font-bold text-red-800">
                Kurang {reward.Price - userPoints} poin
              </p>
            </div>
          )}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Batal</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              disabled={!isPointsSufficient || isSubmitting}
              onClick={handleExchange}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Menukar...
                </>
              ) : (
                'Tukar'
              )}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TukarPoinDialog;