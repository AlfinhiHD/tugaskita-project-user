import dynamic from "next/dynamic";
const RiwayatPage = dynamic(() => import("./_components/riwayat-page"))

const page = () => {
  return <RiwayatPage />;
};

export default page;
