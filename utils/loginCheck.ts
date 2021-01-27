import { getMe } from "~/store/global/actions";
import { getCookie } from "~/utils/cookie";

export const loginCheck = (store, req) => {
  if (getCookie("user", req) !== "undefined") {
    store.dispatch(getMe(JSON.parse(getCookie("user", req))));
  } else {
    req.client._httpMessage.writeHead(301, { location: "/" });
    req.client._httpMessage.end();
  }
};
