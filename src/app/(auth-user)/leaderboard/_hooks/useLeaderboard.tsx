import useSWR from "swr";
import SiswaService from "@/app/_services/siswa-service";

const useLeaderboard = () => {
  const {
    data: leaderboardData,
    error,
    isLoading,
  } = useSWR("/user/rank", () => SiswaService.getTopRank());

  const sortedLeaderboard =
    leaderboardData?.data?.sort((a, b) => b.point - a.point).slice(0, 15) || [];

  return {
    leaderboard: sortedLeaderboard,
    isLoading,
    error,
  };
};

export default useLeaderboard;
