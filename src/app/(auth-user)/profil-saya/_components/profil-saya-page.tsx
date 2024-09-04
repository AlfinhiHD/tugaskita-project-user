"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import useProfilSaya from "../_hooks/useProfilSaya";
import ChangePasswordDialog from "./change-password-dialog";
import {
  Mail,
  Star,
  CheckCircle,
  User,
  Book,
  MapPin,
  School,
  AlertCircle,
} from "lucide-react";
import { ProfilSayaSkeleton } from "@/app/_components/skeletons";
import Image from "next/image";

const ProfilSaya = () => {
  const {
    user,
    totalPenalty,
    isChangingPassword,
    setIsChangingPassword,
    taskDone,
    loadingProfile,
    loadingTaskDone,
    loadingTotalPenalty,
  } = useProfilSaya();

  if (loadingProfile && loadingTaskDone && loadingTotalPenalty) {
    return <ProfilSayaSkeleton />;
  }

  return (
    <div className="page-wrapper p-8 bg-gray-100 min-h-screen">
      <h1 className="flex items-center ms-3 mt-3 font-bold text-4xl mb-8 text-blue-800 shadow-text">
        <User className="mr-3 h-10 w-10" />
        Profil Saya
      </h1>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-700 p-8 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <Image
              src={user?.image || "/assets/images/default-image.jpg"}
              alt={user?.name}
              width={192}
              height={192}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 md:mb-0 md:mr-8 object-cover border-4 border-white shadow-lg"
            />
            <div className="text-center md:text-left flex-grow">
              <h2 className="text-3xl font-bold mb-2">{user?.name}</h2>
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Mail className="w-5 h-5 mr-2" />
                <p className="text-blue-200">{user?.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-3 gap-6 mb-8">
            {/* Monthly Points and Total Points */}
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-blue-700 mr-2" />
                <p className="text-lg font-semibold text-blue-700">
                  Poin Bulanan
                </p>
              </div>
              <p className="text-xl md:text-3xl font-bold text-blue-800">
                {user?.point}
              </p>
              <div className="mt-4">
                <p className="text-sm font-semibold text-blue-600">
                  Total Poin:
                </p>
                <p className="text-lg font-bold text-blue-700">
                  {user?.total_point}
                </p>
              </div>
            </div>

            {/* Tasks Completed */}
            <div className="bg-green-100 p-6 rounded-lg text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-6 h-6 text-green-700 mr-2" />
                <p className="text-lg font-semibold text-green-700">
                  Tugas Selesai
                </p>
              </div>
              <p className="text-xl md:text-3xl font-bold text-green-800">
                {taskDone}
              </p>
            </div>

            {/* Total Penalty */}
            <div className="bg-red-100 p-6 rounded-lg text-center">
              <div className="flex items-center justify-center mb-2">
                <AlertCircle className="w-6 h-6 text-red-700 mr-2" />
                <p className="text-lg font-semibold text-red-700">
                  Total Penalty
                </p>
              </div>
              <p className="text-xl md:text-3xl font-bold text-red-800">
                {totalPenalty}
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Informasi Lainnya
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <Book className="w-5 h-5 text-blue-600 mr-2" />
                <p>
                  <span className="font-medium">Kelas:</span> {user?.class}
                </p>
              </div>
              <div className="flex items-center">
                <School className="w-5 h-5 text-blue-600 mr-2" />
                <p>
                  <span className="font-medium">Sekolah:</span> {user?.school}
                </p>
              </div>
              <div className="flex items-center">
                <Book className="w-5 h-5 text-blue-600 mr-2" />
                <p>
                  <span className="font-medium">Agama:</span> {user?.religion}
                </p>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                <p>
                  <span className="font-medium">Alamat:</span> {user?.address}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              onClick={() => setIsChangingPassword(true)}
              className="bg-green-500 hover:bg-green-600 px-8 py-3 text-lg"
            >
              Ganti Password
            </Button>
          </div>
        </div>
      </div>

      <ChangePasswordDialog
        isOpen={isChangingPassword}
        onClose={() => setIsChangingPassword(false)}
      />
    </div>
  );
};

export default ProfilSaya;
