import instance from "../_utils/axios.instance";

const getSiswaProfile = async () => {
  const res = await instance.get("/user/profile");

  return res.data;
};

const getCountTaskDone = async () => {
  const res = await instance.get("/user-task/sum-clear");

  return res.data;
};

const SiswaService = {
  getSiswaProfile,
  getCountTaskDone
};

export default SiswaService;
