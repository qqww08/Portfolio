import { NextPage } from "next";
import React, { useEffect } from "react";
import { WithReduxNextPageContext } from "~/interfaces";
import Login from "~/components/Template/Login";

const Index: NextPage = () => {
  return (
    <>
      <Login />
    </>
  );
};

Index.getInitialProps = async ({ store, req }: WithReduxNextPageContext) => {
  return;
};
export default Index;
