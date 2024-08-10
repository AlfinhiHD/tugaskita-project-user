import instance from "../_utils/axios.instance";

const getReward = async () => {
  const res = await instance.get("/admin-reward");

  return res.data;
};

const RewardService = {
  getReward,
};

export default RewardService;
