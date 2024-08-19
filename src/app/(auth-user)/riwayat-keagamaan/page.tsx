import dynamic from "next/dynamic";
const RiwayatKeagamaanPage = dynamic(() => import("./_components/riwayat-keagamaan-page"))

const page = () => {
  return <RiwayatKeagamaanPage />;
};

export default page;
