import dynamic from "next/dynamic";
const LeaderboardPage = dynamic(() => import("./_components/leaderboard-page"))

const page = () => {
  return <LeaderboardPage />;
};

export default page;
