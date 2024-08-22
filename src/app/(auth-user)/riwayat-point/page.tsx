import dynamic from "next/dynamic";
const RiwayatPointPage = dynamic(() => import("./_components/riwayat-point-page"))

const page = () => {
  return <RiwayatPointPage />;
};

export default page;
