import instance from "../_utils/axios.instance";


const getReligionTask = async () => {
  const res = await instance.get("/user-task/religion");

  return res.data;
};

const getReligionTaskDetail = async (paramsId) => {
  const res = await instance.get(`/user-task/religion/${paramsId}`);

  return res.data;
};

const postReligionTask = async () => {
    const res = await instance.post("/user-task/religion")

    return res.data
}

const postReqReligionTask = async () => {
    const res = await instance.post("/user-task/religion-req")

    return res.data
}

const getReqReligionTask = async () => {
    const res = await instance.get("/user-task/religion-req/history")

    return res.data
}

const getSubmitReligionTask = async () => {
    const res = await instance.get("/user-task/religion/history")

    return res.data
}

const KeagamaanService = {
  getReligionTask,
  postReligionTask,
  postReqReligionTask,
  getReqReligionTask,
  getSubmitReligionTask,
  getReligionTaskDetail
};

export default KeagamaanService;
