export type ResponseDTO<T> = {
  data: T;
  message: string;
};

export type LoginValue = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type TugasDetail = {
  id: string;
  title: string;
  point: number;
  status: string;
  description: string;
  type: string;
  startDate: string;
  endDate: string;
};

export type TugasType = {
  id: string;
  title: string;
  point: number;
  status: string;
  description: string;
  type: string;
  startDate: string;
  endDate: string;
};

export type ProfileSiswaType = {
  id: string;
  name: string;
  image: string;
  role: string;
  email: string;
  class: string;
  address: string;
  school: string;
  point: string;
  religion: string;
  total_point: string;
};

export type TaskDoneType = {
  count: number;
};

export type RewardType = {
  id: string;
  name: string;
  stock: number;
  price: number;
  image: string;
};

export type RiwayatUploadTaskType = {
  id: string;
  task_id: string;
  task_name: string;
  user_id: string;
  user_name: string;
  image: string;
  description: string;
  status: string;
  type: string;
  message: string;
  created_at: string;
  updated_at: string;
};

export type RiwayatRequestTaskType = {
  id: string;
  title: string;
  user_id: string;
  user_name: string;
  image: string;
  type: string;
  description: string;
  point: number;
  status: string;
  message: string;
  created_at: string;
  updated_at: string;
};

export type RiwayatReward = {
  id: string;
  reward_id: string;
  reward_name: string;
  user_id: string;
  status: string;
  created_at: string;
  updated_at: string;
};

export type PenaltyType = {
  id: string;
  user_id: string;
  user_name: string;
  point: number;
  description: string;
  date: string;
  created_at: string;
  updated_at: string;
};

export type ReligionTaskType = {
  id: string;
  title: string;
  description: string;
  religion: string;
  point: number;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
};

export type ReligionTaskSubmitHistoryType = {
  id: string;
  task_id: string;
  task_name: string;
  user_id: string;
  username: string;
  image: string;
  description: string;
  status: string;
  message: string;
  created_at: string;
  updated_at: string;
};

export type ReligionTaskReqHistoryType = {
  id: string;
  title: string;
  user_id: string;
  user_name: string;
  image: string;
  type: string;
  description: string;
  point: number;
  status: string;
  message: string;
  created_at: string;
  updated_at: string;
};

export type RiwayatPointType = {
  id: string;
  user_id: string;
  user_name: string;
  point: number;
  description: string;
  date: string;
  created_at: string;
  updated_at: string;
}