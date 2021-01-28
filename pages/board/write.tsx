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
  await loginCheck(store, req);
  return;
};

export default Write;
