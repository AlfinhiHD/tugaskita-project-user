import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";
import Link from "next/link";

const KeagamaanCard = ({ task }) => {
  return (
    <Link href={`/keagamaan/${task.id}`} className="mt-5 block h-full">
      <Card className="bg-purple-800 border-none text-white hover:scale-105 transition-transform duration-200 cursor-pointer h-full flex flex-col">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-center mb-4">
            <ClipboardList className="w-12 h-12 mr-4 flex-shrink-0" />
            <h3 className="font-semibold text-lg line-clamp-2">{task.title}</h3>
          </div>
          <div className="bg-white p-5 text-purple-800 rounded-md flex-grow flex flex-col">
            <p className="font-bold text-lg">Deskripsi : </p>
            <p className="text-sm my-5 line-clamp-3 flex-grow overflow-hidden">
              {task.description}
            </p>
            <p className="text-sm mb-2">
              <b>Tenggat:</b> {task.end_date}
            </p>
            <p className="text-sm mb-2">
              <b>Agama:</b> {task.religion}
            </p>
          </div>

          <div className="mt-4 text-center">
            <span className="bg-green-500 text-white px-6 py-2 rounded-full text-base inline-block">
              {task.point} poin
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default KeagamaanCard;