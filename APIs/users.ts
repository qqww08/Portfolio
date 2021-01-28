import Axios from "axios";
import cookie from "js-cookie";
import { getMe } from "~/store/global/actions";
//회원가입
export const registerAPI = async (userData) => {
  return await Axios.post("/api/user", userData);
};
//유저 정보 가져오기
export const userAPI = async () => {
  return await Axios.get("/api/user").then((res) => {
    return res.data;
  });
};
//회원 정보 수정
export const updateUserAPI = async (me) => {
  return await Axios.put(`/api/user/${me.id}`, me).then((res) => {
    userAPI().then((res: any) => {
      console.log(res.filter((e) => e.id === me.id)[0]);
      getMe(res.filter((e) => e.id === me.id)[0]);
      cookie.set("user", JSON.stringify(res.filter((e) => e.id === me.id)[0]));
    });
  });
};
