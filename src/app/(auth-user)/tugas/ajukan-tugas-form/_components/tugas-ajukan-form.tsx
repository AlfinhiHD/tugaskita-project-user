"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, ImageIcon } from "lucide-react";
import instance from "@/app/_utils/axios.instance";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const formSchema = z.object({
  title: z.string().min(1, "Nama tugas harus diisi"),
  point: z.number().min(1, "Jumlah poin harus lebih dari 0"),
  description: z.string().min(10, "Deskripsi tugas minimal 10 karakter"),
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
});

type SubmitAjukanTugasFormValues = z.infer<typeof formSchema>;

const FormTugas = () => {
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      point: 0,
      description: "",
      image: undefined,
    },
  });

  const onSubmit = async (data: SubmitAjukanTugasFormValues) => {
    setIsSubmitting(true);
    const { title, description, image, point } = data;
    const formData = new FormData();

    formData.append("title", title);
    formData.append("image", image[0]);
    formData.append("description", description);
    formData.append("point", point.toString());

    try {
      const response = await instance.post("/user-task/request", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.message === "succes upload request task") {
        setIsSubmitting(false);
        Swal.fire("Success", "Berhasil submit ajukan tugas", "success");
        router.push("/riwayat");
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

  return (
    <div className="container mx-auto p-6">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            <p className="font-bold text-4xl mt-3 mb-8 text-blue-800 flex items-center">
              <History className="mr-3 h-10 w-10" />
              Pengajuan Tugas
            </p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Tugas</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan nama tugas" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="point"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jumlah Poin</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Masukkan jumlah poin"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Deskripsi Tugas</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Masukkan deskripsi tugas"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Upload Foto Tugas</FormLabel>
                    <FormControl>
                      <div className="flex flex-col items-center justify-center w-full">
                        <label
                          htmlFor="dropzone-file"
                          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                        >
                          {previewUrl ? (
                            <img
                              src={previewUrl}
                              alt="Preview"
                              className="h-full object-contain"
                            />
                          ) : (
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <ImageIcon className="w-10 h-10 mb-3 text-gray-400" />
                              <p className="mb-2 text-sm text-gray-500">
                                <span className="font-semibold">
                                  Klik untuk upload
                                </span>{" "}
                                atau drag and drop
                              </p>
                              <p className="text-xs text-gray-500">
                                PNG, JPG atau GIF (MAX. 800x400px)
                              </p>
                            </div>
                          )}
                        </label>
                        <Input
                          id="dropzone-file"
                          type="file"
                          className="hidden"
                          onChange={(e) => {
                            field.onChange(e.target.files);
                            if (e.target.files && e.target.files[0]) {
                              const file = e.target.files[0];
                              const url = URL.createObjectURL(file);
                              setPreviewUrl(url);
                            }
                          }}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" disabled={isSubmitting}>
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
                    Submitting...
                  </>
                ) : (
                  "Submit Tugas"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormTugas;
