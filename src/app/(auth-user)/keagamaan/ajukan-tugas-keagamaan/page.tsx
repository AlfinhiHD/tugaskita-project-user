import dynamic from "next/dynamic";
const TugasForm = dynamic(() => import("./_components/tugas-keagamaan-ajukan-form"))

const page = () => {
  return <TugasForm />;
};

export default page;
