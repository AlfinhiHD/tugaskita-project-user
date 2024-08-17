import instance from "../_utils/axios.instance";

const getAllPenalty = async () => {
  const res = await instance.get("/user-penalty/history");

  return res.data;
};

const getDetailPenalty = async (penaltyId) => {
  const res = await instance.get(`/user-penalty/${penaltyId}`);

  return res.data;
};

const PenaltyService = {
  getAllPenalty,
  getDetailPenalty,
};

export default PenaltyService;
