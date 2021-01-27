import Axios from "axios";
import cookie from "js-cookie";
import { getMe } from "~/store/global/actions";
export const registerAPI = async (userData) => {
  return await Axios.post("/api/user", userData);
};
export const userAPI = async () => {
  return await Axios.get("/api/user").then((res) => {
    return res.data;
  });
};
export const updateUserAPI = async (me) => {
  return await Axios.put(`/api/user/${me.id}`, me).then((res) => {
    userAPI().then((res: any) => {
      console.log(res.filter((e) => e.id === me.id)[0]);
      getMe(res.filter((e) => e.id === me.id)[0]);
      cookie.set("user", JSON.stringify(res.filter((e) => e.id === me.id)[0]));
    });
  });
};
