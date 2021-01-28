import { getMe } from "~/store/global/actions";
import { getCookie } from "~/utils/cookie";

export const loginCheck = (store, req) => {
  // 로그인 유저한 경우
  if (getCookie("user", req) !== "undefined") {
    store.dispatch(getMe(JSON.parse(getCookie("user", req))));
    // 비로그인 일 시 메인 페이지 이동
  } else {
    req.client._httpMessage.writeHead(301, { location: "/" });
    req.client._httpMessage.end();
  }
};
