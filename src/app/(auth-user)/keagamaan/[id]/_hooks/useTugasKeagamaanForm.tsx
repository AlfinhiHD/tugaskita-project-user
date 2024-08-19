import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useParams, useRouter } from "next/navigation";
import { ResponseDTO, ReligionTaskType } from "@/app/_constant/global-types";
import KeagamaanService from "@/app/_services/keagamaan-service";
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

const submitKeagamaanSchema = z.object({
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

type SubmitKeagamaanFormValues = z.infer<typeof submitKeagamaanSchema>;

export const useTugasKeagamaanForm = () => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const params = useParams();
  const router = useRouter();

  const {
    data: taskDetail,
    error: errorTaskDetail,
    mutate: mutateTaskDetail,
    isLoading: loadingTaskDetail,
  } = useSWR<ResponseDTO<ReligionTaskType>, Error>(
    params.id ? `/user-task/religion/${params.id}` : null,
    () => (params.id ? KeagamaanService.getReligionTaskDetail(params.id) : null)
  );

  const form = useForm<SubmitKeagamaanFormValues>({
    resolver: zodResolver(submitKeagamaanSchema),
    defaultValues: {
      description: "",
    },
  });

  useEffect(() => {
    if (errorTaskDetail) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error loading data. Please refresh the page and check your internet connection.',
      });
      router.push("/keagamaan")
    }
  }, [errorTaskDetail]);

  const onSubmit = async (data: SubmitKeagamaanFormValues) => {
    setIsSubmitting(true);
    const { image, description } = data;
    const formData = new FormData();

    formData.append("task_id", params.id.toString());
    formData.append("image", image[0]);
    formData.append("description", description);

    try {
      const response = await instance.post("/user-task/religion-task", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.message === "success upload task") {
        setIsSubmitting(false);
        Swal.fire("Success", "Berhasil submit tugas keagamaan", "success");
        router.push("/keagamaan")
      } else {
        setIsSubmitting(false);
        Swal.fire("Warning", "Terjadi kesalahan saat submit tugas keagamaan", "warning");
      }
    } catch (error) {
      setIsSubmitting(false);
      Swal.fire("Error", "Terjadi kesalahan saat submit tugas keagamaan", "error");
      console.error("Error submitting tugas keagamaan:", error);
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

  return {
    form,
    previewImage,
    onSubmit,
    handleImageChange,
    taskDetail: taskDetail?.data,
    loadingTaskDetail,
    isSubmitting,
    setIsSubmitting,
    errorTaskDetail
  };
};