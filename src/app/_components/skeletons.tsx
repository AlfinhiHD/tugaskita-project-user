import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { User } from "lucide-react";

export const StatCardSkeleton = () => (
  <Card className="bg-gradient-to-br from-gray-200 to-gray-300 shadow-lg">
    <CardContent className="flex items-center p-6">
      <Skeleton className="w-16 h-16 rounded-full mr-6" />
      <div>
        <Skeleton className="h-6 w-24 mb-2" />
        <Skeleton className="h-8 w-32" />
      </div>
    </CardContent>
  </Card>
);

export const TableSkeleton = () => (
  <div className="space-y-4">
    <Skeleton className="h-10 w-full" />
    <Skeleton className="h-10 w-full" />
    <Skeleton className="h-10 w-full" />
    <Skeleton className="h-10 w-full" />
    <Skeleton className="h-10 w-full" />
  </div>
);

export const SkeletonTugasCard = () => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <div className="p-6">
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/2 mb-4" />
      <div className="flex justify-between items-center mb-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-6 w-24" />
      </div>
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-5/6 mb-4" />
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-8 w-24" />
      </div>
    </div>
  </div>
);

export const FormSubmitTugasSkeleton = () => {
  return (
    <div className="page-wrapper bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-8">
      <Skeleton className="h-12 w-3/4 mx-auto mb-8 mt-3" />

      <Card className="bg-white shadow-xl rounded-xl overflow-hidden max-w-5xl mx-auto">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Skeleton className="w-12 h-12 rounded-full" />
              <div>
                <Skeleton className="h-6 w-48 mb-2" />
                <Skeleton className="h-4 w-64" />
              </div>
            </div>
            <Skeleton className="h-10 w-24 rounded-full" />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Skeleton className="h-24 w-full mb-6" />

          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl">
            <Skeleton className="h-6 w-48 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Skeleton className="h-[250px] w-full mb-4" />
                <Skeleton className="h-10 w-full" />
              </div>
              <Skeleton className="h-[320px] w-full" />
            </div>
          </div>
          <Skeleton className="h-12 w-full mt-8 rounded-full" />
        </CardContent>
      </Card>
    </div>
  );
};

export const TukarPoinPageSkeleton = () => {
  return (
    <div className="page-wrapper bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto mt-3">
        <div className="flex justify-between items-center mb-8">
          <Skeleton className="h-10 w-48" />
          <Skeleton className="h-10 w-40" />
        </div>

        <Card className="bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <Skeleton className="h-10 w-64 rounded-full" />
                <Skeleton className="h-10 w-48 rounded-full" />
              </div>
              <Skeleton className="h-10 w-32 rounded-full" />
            </div>
          </div>

          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <CardContent className="p-4">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2 mb-4" />
                    <Skeleton className="h-10 w-full rounded-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export const ProfilSayaSkeleton = () => {
  return (
    <div className="page-wrapper p-8 bg-gray-100 min-h-screen">
      <h1 className="flex items-center ms-3 mt-3 font-bold text-4xl mb-8 text-blue-800 shadow-text">
        <User className="mr-3 h-10 w-10" />
        Profil Saya
      </h1>

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-700 p-8 text-white">
          <div className="flex flex-col md:flex-row items-center">
            <Skeleton className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 md:mb-0 md:mr-8" />
            <div className="text-center md:text-left flex-grow">
              <Skeleton className="h-8 w-48 mb-2" />
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Skeleton className="h-5 w-5 mr-2" />
                <Skeleton className="h-5 w-40" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-2 gap-6 mb-8">
            <Card className="bg-blue-100 p-6 rounded-lg">
              <CardContent className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Skeleton className="h-6 w-6 mr-2" />
                  <Skeleton className="h-6 w-16" />
                </div>
                <Skeleton className="h-8 w-16 mx-auto" />
              </CardContent>
            </Card>
            <Card className="bg-green-100 p-6 rounded-lg">
              <CardContent className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Skeleton className="h-6 w-6 mr-2" />
                  <Skeleton className="h-6 w-24" />
                </div>
                <Skeleton className="h-8 w-16 mx-auto" />
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <Skeleton className="h-12 w-40" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const RiwayatPageSkeleton = () => {
  return (
    <div className="page-wrapper bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-8">
      <div className="mx-auto mt-3">
        <Skeleton className="h-12 w-96 mb-8" />
        <div className="bg-white shadow-xl rounded-md overflow-hidden">
          <Skeleton className="h-12 w-full" />
          <div className="p-6">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Skeleton className="h-10 w-64 rounded-full" />
              <Skeleton className="h-10 w-48 rounded-full" />
              <Skeleton className="h-10 w-48 rounded-full" />
              <Skeleton className="h-10 w-48 rounded-full" />
            </div>
            <Skeleton className="h-64 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};