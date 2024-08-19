import { useState, useEffect } from "react";
import useSWR from "swr";
import KeagamaanService from "@/app/_services/keagamaan-service";

const useKeagamaan = () => {
  const [search, setSearch] = useState("");
  const [pointRange, setPointRange] = useState("semua");
  const [endDate, setEndDate] = useState("");
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const {
    data: tasks,
    error: errorTasks,
    mutate: mutateTasks,
    isLoading: loadingTasks,
  } = useSWR("/user-task/religion-task", KeagamaanService.getReligionTask);

  useEffect(() => {
    setFilteredTasks(tasks?.data);
  }, [tasks]);

  useEffect(() => {
    const filtered = tasks?.data?.filter((task) => {
      const matchSearch = task.title.toLowerCase().includes(search.toLowerCase());
      const matchPoints =
        pointRange === "semua"
          ? true
          : pointRange === "1001+"
          ? task.point > 1000
          : pointRange === "501-1000"
          ? task.point >= 501 && task.point <= 1000
          : task.point >= 100 && task.point <= 500;
      const matchDate = !endDate || new Date(task.end_date) <= new Date(endDate);
      return matchSearch && matchPoints && matchDate;
    });
    setFilteredTasks(filtered);
    setCurrentPage(1);
  }, [search, pointRange, endDate, tasks]);

  const pageCount = Math.ceil(filteredTasks?.length / itemsPerPage);
  const currentTasks = filteredTasks?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    search,
    setSearch,
    pointRange,
    setPointRange,
    endDate,
    setEndDate,
    currentTasks,
    currentPage,
    setCurrentPage,
    pageCount,
    loadingTasks,
  };
};

export default useKeagamaan;