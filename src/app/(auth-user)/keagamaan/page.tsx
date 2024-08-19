import dynamic from "next/dynamic";
const KeagamaanPage = dynamic(() => import("./_components/keagamaan-page"))

const page = () => {
  return <KeagamaanPage />;
};

export default page;
