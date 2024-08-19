import dynamic from "next/dynamic";
const TugasKeagamaanSubmitForm = dynamic(() => import("./_components/tugas-keagamaan-form"))

const page = () => {
  return <TugasKeagamaanSubmitForm />;
};

export default page;
