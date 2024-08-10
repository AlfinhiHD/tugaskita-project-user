import { ResponseDTO, TugasType } from "@/app/_constant/global-types";
import TugasService from "@/app/_services/tugas-service";
import { useState, useEffect } from "react";
import useSWR from "swr";

const useTugas = () => {
  const [search, setSearch] = useState("");
  const [pointRange, setPointRange] = useState("semua");
  const [endDate, setEndDate] = useState("");
  const [filteredTugas, setFilteredTugas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const {
    data: tasks,
    error: errorTasks,
    mutate: mutateTasks,
    isLoading: loadingTasks,
  } = useSWR<ResponseDTO<TugasType[]>, Error>(["/admin-task"], () =>
    TugasService.getTugas()
  );

  useEffect(() => {
    setFilteredTugas(tasks?.data)
  }, [tasks])

 
  useEffect(() => {
    const filtered = tasks?.data?.filter((tugas) => {
      const matchSearch = tugas.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchPoints =
        pointRange === "semua"
          ? true
          : pointRange === "1001+"
          ? tugas.point > 1000
          : pointRange === "501-1000"
          ? tugas.point >= 501 && tugas.point <= 1000
          : tugas.point >= 100 && tugas.point <= 500;
      const matchDate =
        !endDate || new Date(tugas.endDate) <= new Date(endDate);
      return matchSearch && matchPoints && matchDate;
    });
    setFilteredTugas(filtered);
    setCurrentPage(1);
  }, [search, pointRange, endDate]);

  const pageCount = Math.ceil(filteredTugas?.length / itemsPerPage);
  const currentTugas = filteredTugas?.slice(
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
    currentTugas,
    currentPage,
    setCurrentPage,
    pageCount,
    loadingTasks
  };
};

export default useTugas;
