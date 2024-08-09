import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useParams } from "next/navigation";
import { TugasDetail } from "@/app/_constant/global-types";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

const submitTugasSchema = z.object({
  buktiTugas: z
    .any()
    .refine((files) => files?.length == 1, "Harus upload satu gambar.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Ukuran maksimum adalah 5MB.`)
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Hanya .jpg, .jpeg, .png and .webp formats yang diterima."
    ),
  keteranganTugas: z.string().min(1, "Keterangan tugas harus diisi."),
});

type SubmitTugasFormValues = z.infer<typeof submitTugasSchema>;

export const useTugasForm = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const params = useParams();

  const tugasDetail: TugasDetail = {
    judul: "Matematika: Persamaan Kuadrat",
    poin: 100,
    tenggat: "2023-08-31",
    deskripsi: "Membersihkan ruang kelas untuk menciptakan lingkungan belajar yang bersih, nyaman, dan mendukung proses belajar mengajar. Tugas ini dilakukan setiap hari sebelum pelajaran dimulai dan setelah pelajaran selesai. Setiap kali berhasil menyelesaikan tugas membersihkan kelas, siswa akan mendapatkan 200 poin."
  };

  const form = useForm<SubmitTugasFormValues>({
    resolver: zodResolver(submitTugasSchema),
    defaultValues: {
      keteranganTugas: "",
    },
  });

  const onSubmit = (data: SubmitTugasFormValues) => {
    console.log(data);
    // Implementasi logika submit
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  console.log(params.id);

  return {
    form,
    previewImage,
    onSubmit,
    handleImageChange,
    tugasDetail,
  };
};