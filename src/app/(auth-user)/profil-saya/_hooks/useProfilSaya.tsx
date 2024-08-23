import {
  ProfileSiswaType,
  ResponseDTO,
  TaskDoneType,
  TotalPenaltyType,
} from "@/app/_constant/global-types";
import SiswaService from "@/app/_services/siswa-service";
import { useEffect, useState } from "react";
import useSWR from "swr";

const useProfilSaya = () => {
  const [isChangingPassword, setIsChangingPassword] = useState(false);

  const {
    data: profile,
    error: errorProfile,
    mutate: mutateProfile,
    isLoading: loadingProfile,
  } = useSWR<ResponseDTO<ProfileSiswaType>, Error>(["/user/profile"], () =>
    SiswaService.getSiswaProfile()
  );

  const {
    data: taskDone,
    error: errorTaskDone,
    mutate: mutateTaskDone,
    isLoading: loadingTaskDone,
  } = useSWR<TaskDoneType, Error>(["/user-task/sum-clear"], () =>
    SiswaService.getCountTaskDone()
  );

  const {
    data: totalPenalty,
    error: errorTotalPenalty,
    mutate: mutateTotalPenalty,
    isLoading: loadingTotalPenalty,
  } = useSWR<TotalPenaltyType, Error>(["/sum-penalty"], () => SiswaService.totalPinalty());

  return {
    user: profile?.data,
    loadingProfile,
    isChangingPassword,
    setIsChangingPassword,
    taskDone: taskDone?.count,
    loadingTaskDone,
    totalPenalty: totalPenalty?.count,
    loadingTotalPenalty,
    errorTotalPenalty,
  };
};

export default useProfilSaya;
