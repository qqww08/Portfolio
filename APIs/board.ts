import Axios from "axios";
//글쓰기
export const writeAPI = async (data) => {
  return await Axios.post("/api/board", data).then((res) => {
    return res.data;
  });
};
