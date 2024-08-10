import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";
import Link from "next/link";

const TugasCard = ({ tugas }) => {
  return (
    <Link href={`/tugas/${tugas.id}`} className="mt-5">
      <Card className="bg-blue-800 border-none text-white hover:scale-105 transition-transform duration-200 cursor-pointer">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <ClipboardList className="w-12 h-12 mr-4 flex-shrink-0" />
            <h3 className="font-semibold text-lg">{tugas.title}</h3>
          </div>
          <div className="bg-white p-5 text-blue-800 rounded-md">
            <p className="font-bold text-lg">Deskripsi : </p>
            <p className="text-sm my-5 line-clamp-3 flex-grow overflow-hidden">
              {tugas.description}
            </p>
            <p className="text-sm mb-2">
              <b>Tenggat:</b> {tugas.endDate}
            </p>
          </div>

          <div className="mt-12 mx-auto">
            <span className="bg-green-500 text-white px-6 py-2 rounded-full text-base">
              {tugas.point} poin
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default TugasCard;
