import { useState } from "react";
import TaskDetailDialog from "../_components/task-detail-dialog";

const useDashboard = () => {
  const [openDialog, setOpenDialog] = useState(null);

  const todaysTasks = [
    {
      id: 1,
      title: "Matematika: Persamaan Kuadrat 1",
      points: 100,
      description: "Selesaikan 10 soal persamaan kuadrat",
    },
    {
      id: 2,
      title: "Matematika: Persamaan Kuadrat 2",
      points: 200,
      description: "Selesaikan 10 soal persamaan kuadrat",
    },
    {
      id: 3,
      title: "Matematika: Persamaan Kuadrat 3",
      points: 150,
      description: "Selesaikan 10 soal persamaan kuadrat",
    },
  ];


  const columns = [
    { key: "title", header: "Nama Task", sortable: true },
    { key: "points", header: "Point", sortable: true },
    {
      key: "actions",
      header: "Detail",
      render: (task) => <TaskDetailDialog task={task} />,
    },
  ];

  return {
    openDialog,
    setOpenDialog,
    todaysTasks,
    columns,
  };
};

export default useDashboard;