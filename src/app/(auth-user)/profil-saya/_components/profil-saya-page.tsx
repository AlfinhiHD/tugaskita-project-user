"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import useProfilSaya from "../_hooks/useProfilSaya";
import ChangePasswordDialog from "./change-password-dialog";
import { Mail, Star, CheckCircle, User } from "lucide-react";

const ProfilSaya = () => {
  const { user, isChangingPassword, setIsChangingPassword } = useProfilSaya();

  return (
    <div className="page-wrapper p-8 bg-gray-100 min-h-screen">
      <h1 className="flex items-center ms-3 mt-3 font-bold text-4xl mb-8  text-blue-800 shadow-text">
        <User className="mr-3 h-10 w-10" />
        Profil Saya
      </h1>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-700 p-8 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src={user.photo}
              alt={user.name}
              className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 md:mb-0 md:mr-8 object-cover border-4 border-white shadow-lg"
            />
            <div className="text-center md:text-left flex-grow">
              <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Mail className="w-5 h-5 mr-2" />
                <p className="text-blue-200">{user.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-blue-700 mr-2" />
                <p className="text-lg font-semibold text-blue-700">Poin</p>
              </div>
              <p className="text-3xl font-bold text-blue-800">{user.points}</p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg text-center">
              <div className="flex items-center justify-center mb-2">
                <CheckCircle className="w-6 h-6 text-green-700 mr-2" />
                <p className="text-lg font-semibold text-green-700">
                  Tugas Selesai
                </p>
              </div>
              <p className="text-3xl font-bold text-green-800">
                {user.completedTasks}
              </p>
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
