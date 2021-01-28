import Axios from "axios";
//댓글 쓰기
export const postCommentAPI = async (data) => {
  return await Axios.post("/api/comment", data).then((res) => {
    return res;
  });
};
// 댓글 가져오기
export const getCommentAPI = async (id: number) => {
  return await Axios.get(`/api/comment?boardId=${id}`).then((res) => {
    return res.data;
  });
};
// 댓글 수정
export const putCommentAPI = async (id: number, data) => {
  return await Axios.put(`/api/comment/${id}`, data).then((res) => {
    return res.data;
  });
};
// 댓글 삭제
export const deleteCommentAPI = async (id: number) => {
  return await Axios.delete(`/api/comment/${id}`);
};
