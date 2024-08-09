import dynamic from "next/dynamic";
const TukarPoinPage = dynamic(() => import("./_components/tukar-poin-page"))

const page = () => {
  return <TukarPoinPage />;
};

export default page;
