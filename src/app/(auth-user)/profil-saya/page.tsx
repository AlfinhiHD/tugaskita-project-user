import dynamic from "next/dynamic";
const ProfilSayaPage = dynamic(() => import("./_components/profil-saya-page"))

const page = () => {
  return <ProfilSayaPage />;
};

export default page;
