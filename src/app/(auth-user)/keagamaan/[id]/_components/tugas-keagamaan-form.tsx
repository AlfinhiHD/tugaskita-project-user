"use client";

import React from "react";
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
import Image from "next/image";
import { ImageIcon, Calendar, Clock, ClipboardList } from "lucide-react";
import { useTugasKeagamaanForm } from "../_hooks/useTugasKeagamaanForm";
import { FormSubmitTugasSkeleton } from "@/app/_components/skeletons";

const FormSubmitKeagamaan = () => {
  const {
    form,
    previewImage,
    onSubmit,
    handleImageChange,
    taskDetail,
    loadingTaskDetail,
    isSubmitting,
    errorTaskDetail
  } = useTugasKeagamaanForm();

  if (loadingTaskDetail) {
    return <FormSubmitTugasSkeleton />;
  }

  if (errorTaskDetail) {
    return null
  }

  return (
    <div className="page-wrapper bg-gradient-to-br from-purple-50 to-indigo-100 min-h-screen p-4 sm:p-8">
      <h1 className="font-bold text-xl sm:text-2xl md:text-4xl mb-6 sm:mb-8 mt-3 text-center text-purple-800 shadow-text">
        Form Submit Tugas Keagamaan
      </h1>

      <Card className="bg-white shadow-xl rounded-xl overflow-hidden max-w-5xl mx-auto">
        <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 sm:p-6">
          <CardTitle className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <ClipboardList className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-purple-600 p-2 rounded-full" />
              <div>
                <p className="text-lg sm:text-2xl font-bold">
                  {taskDetail.title}
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center mt-2 text-purple-200 text-sm sm:text-base">
                  <div className="flex items-center mb-1 sm:mb-0 sm:mr-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>Tenggat: {taskDetail.end_date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>23:59 WIB</span>
                  </div>
                </div>
              </div>
            </div>
            <span className="text-white bg-green-500 px-3 py-1 w-full md:w-32 text-center sm:px-4 sm:py-2 text-sm sm:text-xl rounded-full font-bold shadow-lg">
              {taskDetail.point} poin
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <div className="bg-purple-50 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
            <p className="font-semibold text-purple-800 mb-2">Deskripsi Tugas:</p>
            <p className="text-gray-700 text-sm sm:text-base">
              {taskDetail.description ? taskDetail.description : "Tidak Ada"}
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 sm:space-y-8"
            >
              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-4 sm:p-6 rounded-xl">
                <p className="text-lg sm:text-xl font-bold text-purple-800 mb-4 sm:mb-6">
                  Selesaikan Tugas:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <div className="mb-4 w-full h-[200px] sm:h-[250px] border-2 border-dashed border-purple-300 rounded-lg flex items-center justify-center bg-white overflow-hidden">
                      {previewImage ? (
                        <Image
                          src={previewImage}
                          alt="Preview"
                          width={300}
                          height={250}
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      ) : (
                        <div className="text-purple-400 flex flex-col items-center">
                          <ImageIcon size={48} />
                          <p className="mt-2 text-xs sm:text-sm text-center px-2">
                            Belum ada gambar yang diunggah
                          </p>
                        </div>
                      )}
                    </div>
                    <FormField
                      control={form.control}
                      name="image"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-purple-700 text-sm sm:text-base">
                            Upload Bukti Tugas
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="file"
                              accept="image/*"
                              onChange={(e) => {
                                field.onChange(e.target.files);
                                handleImageChange(e);
                              }}
                              className="text-sm sm:text-base h-[52px] pb-3 sm:h-15 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-purple-700 text-sm sm:text-base">
                          Keterangan Tugas
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Masukkan keterangan tugas di sini"
                            className="h-[200px] sm:h-[320px] resize-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-base sm:text-lg py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
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
                  </div>
                ) : (
                  "Submit Tugas Keagamaan"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormSubmitKeagamaan;