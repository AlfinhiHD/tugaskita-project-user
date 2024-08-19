import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertTriangle, User } from "lucide-react";

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
    <div className="page-wrapper bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen p-4 sm:p-8">
      <Skeleton className="h-8 sm:h-12 w-3/4 mx-auto mb-6 sm:mb-8 mt-3" />

      <Card className="bg-white shadow-xl rounded-xl overflow-hidden max-w-5xl mx-auto">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <Skeleton className="w-10 h-10 sm:w-12 sm:h-12 rounded-full" />
              <div>
                <Skeleton className="h-5 sm:h-6 w-36 sm:w-48 mb-2" />
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <Skeleton className="h-3 sm:h-4 w-28 sm:w-32" />
                  <Skeleton className="h-3 sm:h-4 w-20 sm:w-24" />
                </div>
              </div>
            </div>
            <Skeleton className="h-8 sm:h-10 w-full sm:w-24 rounded-full" />
          </div>
        </CardHeader>
        <CardContent className="p-4 sm:p-6">
          <Skeleton className="h-20 sm:h-24 w-full mb-4 sm:mb-6" />

          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 sm:p-6 rounded-xl">
            <Skeleton className="h-5 sm:h-6 w-36 sm:w-48 mb-4 sm:mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <Skeleton className="h-[200px] sm:h-[250px] w-full mb-4" />
                <Skeleton className="h-9 sm:h-10 w-full" />
              </div>
              <Skeleton className="h-[200px] sm:h-[320px] w-full" />
            </div>
          </div>
          <Skeleton className="h-10 sm:h-12 w-full mt-6 sm:mt-8 rounded-full" />
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

export const PenaltyPageSkeleton = () => {
  return (
    <div className="page-wrapper bg-gradient-to-br from-red-50 to-orange-100 min-h-screen p-4 sm:p-6 md:p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-800 mb-4 sm:mb-6 md:mb-8 flex items-center">
          <AlertTriangle className="mr-2 sm:mr-3 h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-10 lg:w-10" />
          <span className="break-words">Daftar Pelanggaran</span>
        </h1>

        <div className="bg-white shadow-xl rounded-md overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-full sm:w-48 h-10 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
            <div className="overflow-x-auto">
              <div className="space-y-4">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="w-1/4 h-6 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-1/4 h-6 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-1/4 h-6 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-1/4 h-6 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LeaderboardSkeleton = () => (
  <div className="space-y-4">
    {[...Array(15)].map((_, index) => (
      <div
        key={index}
        className="flex items-center gap-x-4 bg-gray-100 p-4 rounded-lg animate-pulse"
      >
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        <div className="flex-grow flex items-center justify-between">
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
      </div>
    ))}
  </div>
);