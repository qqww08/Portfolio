import { getMe } from "~/store/global/actions";
import { getCookie } from "~/utils/cookie";

export const loginCheck = (store, req) => {
  // 쿠키에 유저 정보가 있을 경우 로그인
  if (getCookie("user", req) !== undefined) {
    // 스토어에 유저 정보를 가지고 있지 않을때만 스토어에 저장
    if (store.getState().getGlobal.me === null)
      store.dispatch(getMe(JSON.parse(getCookie("user", req))));
    // 쿠키에 유저 정보가 없을 경우 메인 페이지
  } else {
    req.client._httpMessage.writeHead(301, { location: "/" });
    req.client._httpMessage.end();
  }
};
