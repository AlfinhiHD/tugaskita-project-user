import dynamic from "next/dynamic";
const TugasPage = dynamic(() => import("./_components/tugas-page"))

const page = () => {
  return <TugasPage />;
};

export default page;
