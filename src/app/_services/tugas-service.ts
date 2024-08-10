import instance from "../_utils/axios.instance";

const getTugas = async () => {
  const res = await instance.get("/admin-task");

  return res.data;
};

const getTugasDetail = async (id) => {
  const res = await instance.get(`/user-task/${id}`)

  return res.data;
}

const TugasService = {
    getTugas,
    getTugasDetail
};

export default TugasService