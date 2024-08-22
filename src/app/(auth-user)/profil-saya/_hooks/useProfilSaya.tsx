import {
  ProfileSiswaType,
  ResponseDTO,
  TaskDoneType,
} from "@/app/_constant/global-types";
import SiswaService from "@/app/_services/siswa-service";
import { BASE_IMAGE_URL } from "@/app/_utils/axios.instance";
import { useEffect, useState } from "react";
import useSWR from "swr";

const useProfilSaya = () => {

  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [updatedData, setUpdatedData] = useState(null);

  const {
    data: profile,
    error: errorProfile,
    mutate: mutateProfile,
    isLoading: loadingProfile,
  } = useSWR<ResponseDTO<ProfileSiswaType>, Error>(["/user/profile"], () =>
    SiswaService.getSiswaProfile()
  );

  useEffect(() => {
    if (profile && profile.data) {
      const updatedData = {
        ...profile.data,
        image: profile.data.image ? `${BASE_IMAGE_URL}${profile.data.image.replace('public/', '')}` : null
      };
      setUpdatedData(updatedData);
    }
  }, [profile]);

  const {
    data: taskDone,
    error: errorTaskDone,
    mutate: mutateTaskDone,
    isLoading: loadingTaskDone,
  } = useSWR<TaskDoneType, Error>(["/user-task/sum-clear"], () =>
    SiswaService.getCountTaskDone()
  );

  useEffect(() => {
    console.log(profile)
  })

  return {
    user: updatedData,
    loadingProfile,
    isChangingPassword,
    setIsChangingPassword,
    taskDone: taskDone?.count,
    loadingTaskDone,
  };
};

export default useProfilSaya;
