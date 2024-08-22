import instance from "../_utils/axios.instance"

const getPointHistory = async () => {
    const res = await instance.get("user/point-history")

    return res.data
}

const PointService = {
    getPointHistory
};

export default PointService