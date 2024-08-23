import instance from "../_utils/axios.instance";

const getSiswaProfile = async () => {
  const res = await instance.get("/user/profile");

  return res.data;
};

const getCountTaskDone = async () => {
  const res = await instance.get("/user-task/sum-clear");

  return res.data;
};

const getTopRank = async () => {
  const res = await instance.get("/user/rank");

  return res.data;
};

const totalPinalty = async () => {
  const res = await instance.get("/sum-penalty");

  return res.data
}


const SiswaService = {
  getSiswaProfile,
  getCountTaskDone,
  getTopRank,
  totalPinalty
};

export default SiswaService;
