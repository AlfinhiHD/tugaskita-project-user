import instance from "../_utils/axios.instance";

const getReward = async () => {
  const res = await instance.get("/admin-reward");

  return res.data;
};

const getRewardHistory = async () => {
  const res = await instance.get("/user-reward/history")

  return res.data
}

const RewardService = {
  getReward,
  getRewardHistory
};

export default RewardService;
