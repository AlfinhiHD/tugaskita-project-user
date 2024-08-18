import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Swal from "sweetalert2";
import instance from "@/app/_utils/axios.instance";

const TukarPoinDialog = ({ reward, userPoints, onExchange }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [totalPoints, setTotalPoints] = useState(reward.price);
  const [remainingPoints, setRemainingPoints] = useState(
    userPoints - reward.price
  );
  const [isOpen, setIsOpen] = useState(false);

  const formSchema = z.object({
    amount: z.string().refine(
      (val) => {
        const num = parseInt(val);
        return !isNaN(num) && num > 0 && num <= Math.min(100, reward.stock);
      },
      {
        message: `Jumlah harus antara 1 dan ${Math.min(100, reward.stock)}`,
      }
    ),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "1",
    },
  });

  const amount = form.watch("amount");

  useEffect(() => {
    const numAmount = parseInt(amount) || 1;
    const newTotalPoints = reward.price * numAmount;
    setTotalPoints(newTotalPoints);
    setRemainingPoints(userPoints - newTotalPoints);
  }, [amount, reward.price, userPoints]);

  const isPointsSufficient = remainingPoints >= 0;

  const handleExchange = async (values) => {
    if (!isPointsSufficient) {
      Swal.fire(
        "Error",
        "Poin Anda tidak mencukupi untuk menukar reward ini.",
        "error"
      );
      return;
    }

    setIsOpen(false);

    const result = await Swal.fire({
      title: "Konfirmasi",
      text: `Apakah Anda yakin ingin menukar ${values.amount} ${reward.name} dengan total ${totalPoints} poin?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, tukar!",
      cancelButtonText: "Batal",
    });

    if (result.isConfirmed) {
      setIsSubmitting(true);
      try {
        const response = await instance.post("/user-reward/exchange", {
          reward_id: reward.id,
          amount: parseInt(values.amount),
        });

        if (response.data.message === "succes upload request reward") {
          setIsOpen(false);
          Swal.fire("Berhasil!", "Penukaran reward berhasil.", "success");
          onExchange(reward);
          return true;
        } else {
          Swal.fire("Gagal", "Terjadi kesalahan saat menukar reward.", "error");
        }
      } catch (error) {
        setIsOpen(false);
        console.error("Error exchanging reward:", error);
        Swal.fire("Error", "Terjadi kesalahan saat menukar reward.", "error");
      } finally {
        setIsOpen(false);
        setIsSubmitting(false);
        window.location.reload()
      }
    }
    return false;
  };

  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (!open) {
      form.reset({ amount: "1" });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="w-full bg-blue-500 hover:bg-blue-600">Tukar</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Tukar {reward.name}
          </DialogTitle>
          <DialogDescription className="text-white">
            Masukkan jumlah yang ingin Anda tukar
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleExchange)}
            className="space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <FormField
                  control={form.control}
                  name="amount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Jumlah</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => field.onChange(e.target.value)}
                          autoFocus={false}
                          min="1"
                          max={Math.min(100, reward.stock)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <span className="font-semibold text-white">Poin Anda</span>
                <p className="text-xl font-bold text-blue-300">{userPoints}</p>
              </div>
              <div>
                <span className="font-semibold text-white">
                  Poin Dibutuhkan
                </span>
                <p className="text-xl font-bold text-blue-300">{totalPoints}</p>
              </div>
            </div>
            <div
              className={`p-4 rounded-lg ${
                isPointsSufficient ? "bg-green-100" : "bg-red-100"
              }`}
            >
              <p
                className={`font-semibold ${
                  isPointsSufficient ? "text-green-700" : "text-red-700"
                }`}
              >
                {isPointsSufficient
                  ? "Poin Anda cukup!"
                  : "Poin Anda tidak mencukupi"}
              </p>
              <p
                className={`text-2xl font-bold ${
                  isPointsSufficient ? "text-green-800" : "text-red-800"
                }`}
              >
                {isPointsSufficient
                  ? `Sisa: ${remainingPoints} poin`
                  : `Kurang: ${Math.abs(remainingPoints)} poin`}
              </p>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                disabled={
                  !isPointsSufficient || isSubmitting || !form.formState.isValid
                }
                className="w-full"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Menukar...
                  </>
                ) : (
                  "Tukar"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default TukarPoinDialog;
