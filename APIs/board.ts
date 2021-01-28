import Axios from "axios";
//글쓰기
export const writeAPI = async (data) => {
  return await Axios.post("/api/board", data).then((res) => {
    return res;
  });
};

//게시판 리스트
export const getBoardListAPI = async () => {
  return await Axios.get("/api/board").then((res) => {
    return res;
  });
};
//상세페이지
export const getBoardDetailAPI = async (id: string | string[]) => {
  return await Axios.get(`/api/board/${id}`).then((res) => {
    return res;
  });
};
//상세페이지 수정
export const putBoardDetailAPI = async (id: number, obj) => {
  return await Axios.put(`/api/board/${id}`, obj).then((res) => {
    return res;
  });
};
//상세페이지 삭제
export const deleteDetailAPI = async (id: number) => {
  return await Axios.delete(`/api/board/${id}`).then((res) => {
    return res;
  });
};
