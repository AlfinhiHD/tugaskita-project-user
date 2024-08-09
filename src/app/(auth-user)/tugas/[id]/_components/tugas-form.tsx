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
import { useTugasForm } from "../_hooks/useTugasForm";
import { ClipboardList, ImageIcon, Calendar, Clock } from "lucide-react";

const FormSubmitTugas = () => {
  const { form, previewImage, onSubmit, handleImageChange, tugasDetail } =
    useTugasForm();

  return (
    <div className="page-wrapper bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-8">
      <h1 className="font-bold text-4xl mb-8 mt-3 text-center text-blue-800 shadow-text">
        Form Submit Tugas
      </h1>

      <Card className="bg-white shadow-xl rounded-xl overflow-hidden max-w-5xl mx-auto">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
          <CardTitle className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <ClipboardList className="w-12 h-12 bg-white text-blue-600 p-2 rounded-full" />
              <div>
                <p className="text-2xl font-bold">{tugasDetail.judul}</p>
                <div className="flex items-center mt-2 text-blue-200">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="mr-4">Tenggat: {tugasDetail.tenggat}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>23:59 WIB</span>
                </div>
              </div>
            </div>
            <span className="text-white bg-green-500 px-4 py-2 text-xl rounded-full font-bold shadow-lg">
              {tugasDetail.poin} poin
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="font-semibold text-blue-800 mb-2">Deskripsi Tugas:</p>
            <p className="text-gray-700">{tugasDetail.deskripsi}</p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl">
                <p className="text-xl font-bold text-blue-800 mb-6">
                  Selesaikan Tugas:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-4 w-full h-[250px] border-2 border-dashed border-blue-300 rounded-lg flex items-center justify-center bg-white overflow-hidden">
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
                        <div className="text-blue-400 flex flex-col items-center">
                          <ImageIcon size={64} />
                          <p className="mt-2 text-sm">
                            Klik untuk mengunggah gambar
                          </p>
                        </div>
                      )}
                    </div>
                    <FormField
                      control={form.control}
                      name="buktiTugas"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-700">
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
                              className="h-13 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="keteranganTugas"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-700">
                          Keterangan Tugas
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Masukkan keterangan tugas di sini"
                            className="h-[320px] resize-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Submit Tugas
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormSubmitTugas;
