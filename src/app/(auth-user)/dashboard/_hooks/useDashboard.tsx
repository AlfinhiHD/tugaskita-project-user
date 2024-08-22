import { useState } from "react";
import TaskDetailDialog from "../_components/task-detail-dialog";
import {
  ProfileSiswaType,
  ResponseDTO,
  TaskDoneType,
  TugasType,
} from "@/app/_constant/global-types";
import useSWR from "swr";
import SiswaService from "@/app/_services/siswa-service";
import TugasService from "@/app/_services/tugas-service";

const useDashboard = () => {
  const [openDialog, setOpenDialog] = useState(null);

  const {
    data: tasks,
    error: errorTasks,
    mutate: mutateTasks,
    isLoading: loadingTasks,
  } = useSWR<ResponseDTO<TugasType[]>, Error>(["/admin-task"], () =>
    TugasService.getTugas()
  );

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

  const columns = [
    { key: "title", header: "Nama Task", sortable: true },
    { key: "point", header: "Point", sortable: true },
    {
      key: "actions",
      header: "Detail",
      render: (task) => <TaskDetailDialog task={task} />,
    },
  ];

  return {
    openDialog,
    setOpenDialog,
    todaysTasks: tasks?.data,
    columns,
    profilePoint: profile?.data?.point,
    loadingTasks,
    loadingProfile,
    loadingTaskDone,
    taskDone: taskDone?.count,
    profile: profile?.data, 
  };
};

export default useDashboard;