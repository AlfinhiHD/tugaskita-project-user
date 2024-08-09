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
import { ClipboardList, ImageIcon } from "lucide-react";

const FormSubmitTugas = () => {
  const { form, previewImage, onSubmit, handleImageChange, tugasDetail } =
    useTugasForm();

  return (
    <div className="page-wrapper">
      <h1 className="font-bold text-3xl mb-8">Form Submit Tugas</h1>

      <Card className="bg-blue-200 pb-8 px-8">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <div className="flex items-center">
              <ClipboardList className="w-12 h-12 mr-4 flex-shrink-0" />
              <p>{tugasDetail.judul}</p>
            </div>
            <span className="text-white bg-green-600 p-3 text-xl rounded-lg">
              {tugasDetail.poin} poin
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6">
            <strong>Tenggat:</strong> {tugasDetail.tenggat}
          </p>
          <p className="mb-4">
            <strong>Deskripsi:</strong>
          </p>
          <p>{tugasDetail.deskripsi}</p>
        </CardContent>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 p-8 rounded-md bg-blue-100"
          >
            <p className="text-xl font-bold">Selesaikan :</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-4 w-[300px] h-[200px] border-2 border-dashed border-gray-300 flex items-center justify-center">
                  {previewImage ? (
                    <Image
                      src={previewImage}
                      alt="Preview"
                      width={300}
                      height={200}
                      objectFit="cover"
                    />
                  ) : (
                    <div className="text-gray-400 flex flex-col items-center">
                      <ImageIcon size={48} />
                      <p className="mt-2">Belum ada gambar</p>
                    </div>
                  )}
                </div>
                <FormField
                  control={form.control}
                  name="buktiTugas"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Upload Bukti Tugas</FormLabel>
                      <FormControl>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            field.onChange(e.target.files);
                            handleImageChange(e);
                          }}
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
                    <FormLabel>Keterangan Tugas</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Masukkan keterangan tugas di sini"
                        className="h-64"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full">
              Submit Tugas
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default FormSubmitTugas;
