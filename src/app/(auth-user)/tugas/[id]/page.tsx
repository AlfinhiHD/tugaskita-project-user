import dynamic from "next/dynamic";
const TugasForm = dynamic(() => import("./_components/tugas-form"))

const page = () => {
  return <TugasForm />;
};

export default page;
