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
  point: string;
  total_point: string;
};

export type TaskDoneType = {
  count: number;
}

export type RewardType = {
  Id: string;
  Name: string;
  Stock: number;
  Price: number;
  Image: string
}

export type RiwayatUploadAndRequestTaskType = {
  Id: string;
  TaskId: string;
  TaskName: string;
  UserId: string;
  UserName: string;
  Image: string;
  Description: string;
  Status: string;
  Type: string;
  Timestamp: string;
}

export type RiwayatReward = {
  Id: string;
  RewardId: string;
  RewardName: string;
  UserId: string;
  Status: string;
  Timestamp: string
}

