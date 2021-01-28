import React from "react";
import { WithReduxNextPageContext } from "~/interfaces";
import { loginCheck } from "~/utils/loginCheck";
import WriteTemplate from "~/components/Template/WriteTemplate";
const Write = () => {
  return (
    <>
      <WriteTemplate />
    </>
  );
};

Write.getInitialProps = async ({ store, req }: WithReduxNextPageContext) => {
  // store.dispatch(lang(req.headers['user-agent'].includes('ko') && 'ko'));
  const isServer = !!req;
  // SSR 에서 토큰 체크 후 로딩 풀어주기
  await loginCheck(store, req);
  return;
};

export default Write;
