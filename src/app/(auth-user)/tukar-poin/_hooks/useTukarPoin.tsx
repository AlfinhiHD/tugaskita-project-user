import {
  ProfileSiswaType,
  ResponseDTO,
  RewardType,
} from "@/app/_constant/global-types";
import RewardService from "@/app/_services/reward-service";
import SiswaService from "@/app/_services/siswa-service";
import { BASE_IMAGE_URL } from "@/app/_utils/axios.instance";
import { useState, useEffect } from "react";
import useSWR from "swr";

const useTukarPoin = () => {
  const [search, setSearch] = useState("");
  const [pointRange, setPointRange] = useState("semua");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredRewards, setFilteredRewards] = useState([]);
  const itemsPerPage = 6;

  const {
    data: reward,
    error: errorReward,
    mutate: mutateReward,
    isLoading: loadingrReward,
  } = useSWR<ResponseDTO<RewardType[]>, Error>(["/admin-reward"], () =>
    RewardService.getReward()
  );

  const {
    data: profile,
    error: errorProfile,
    mutate: mutateProfile,
    isLoading: loadingProfile,
  } = useSWR<ResponseDTO<ProfileSiswaType>, Error>(["/user/profile"], () =>
    SiswaService.getSiswaProfile()
  );

  useEffect(() => {
    if (reward && reward?.data) {
      const formatedData = reward?.data.map((user) => ({
        ...user,
        image: `${BASE_IMAGE_URL}${user.image.replace("public/", "")}`,
      }));

      setFilteredRewards(formatedData);
    }
  }, [reward]);

  useEffect(() => {
    const filtered = reward?.data?.filter((reward) => {
      const matchSearch = reward.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchPoints =
        pointRange === "semua"
          ? true
          : pointRange === "1001+"
          ? reward.price > 1000
          : pointRange === "501-1000"
          ? reward.price >= 501 && reward.price <= 1000
          : reward.price >= 100 && reward.price <= 500;
      return matchSearch && matchPoints;
    });
    setFilteredRewards(filtered);
    setCurrentPage(1);
  }, [search, pointRange]);

  const pageCount = Math.ceil(filteredRewards?.length / itemsPerPage);
  const currentRewards = filteredRewards?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    search,
    setSearch,
    pointRange,
    setPointRange,
    currentPage,
    setCurrentPage,
    filteredRewards,
    currentRewards,
    pageCount,
    userPoints: profile?.data?.point,
    itemsPerPage,
    loadingrReward,
    loadingProfile,
  };
};

export default useTukarPoin;
