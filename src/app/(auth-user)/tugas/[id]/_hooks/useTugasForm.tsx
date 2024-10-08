import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useParams, useRouter } from "next/navigation";
import { ResponseDTO, TugasDetail } from "@/app/_constant/global-types";
import TugasService from "@/app/_services/tugas-service";
import useSWR from "swr";
import instance from "@/app/_utils/axios.instance";
import Swal from "sweetalert2";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const submitTugasSchema = z.object({
  image: z
    .any()
    .refine((files) => files?.length == 1, "Harus upload satu gambar.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Ukuran maksimum adalah 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Hanya .jpg, .jpeg, .png and .webp formats yang diterima."
    ),
  description: z.string().min(1, "Keterangan tugas harus diisi."),
});

type SubmitTugasFormValues = z.infer<typeof submitTugasSchema>;

export const useTugasForm = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const params = useParams();
  const router = useRouter();

  const {
    data: tasksDetail,
    error: errorTasksDetail,
    mutate: mutateTasksDetail,
    isLoading: loadingTasksDetail,
  } = useSWR<ResponseDTO<TugasDetail>, Error>(
    params.id ? `/user-task/${params.id}` : null,
    () => (params.id ? TugasService.getTugasDetail(params.id) : null)
  );

  const form = useForm<SubmitTugasFormValues>({
    resolver: zodResolver(submitTugasSchema),
    defaultValues: {
      description: "",
    },
  });
  const onSubmit = async (data: SubmitTugasFormValues) => {
    setIsSubmitting(true);
    const { image, description } = data;
    const formData = new FormData();

    formData.append("task_id", params.id.toString());
    formData.append("image", image[0]);
    formData.append("description", description);

    try {
      const response = await instance.post("/user-task", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.message === "succes upload task") {
        setIsSubmitting(false);
        Swal.fire("Success", "Berhasil submit tugas", "success");
        router.push("/tugas")
      } else {
        setIsSubmitting(false);
        Swal.fire("Warning", "Terjadi kesalahan saat submit tugas", "warning");
      }
    } catch (error) {
      setIsSubmitting(false);
      Swal.fire("Error", "Terjadi kesalahan saat submit tugas", "error");
      console.error("Error submitting tugas:", error);
    }
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
    tugasDetail: tasksDetail?.data,
    loadingTasksDetail,
    isSubmitting,
    setIsSubmitting
  };
};
