import { NextPage } from "next";
import React from "react";
import { WithReduxNextPageContext } from "~/interfaces";
import Login from "~/components/Template/Login";
import Register from "~/components/Template/Register";

const Index: NextPage = () => {
  return (
    <>
      <Register />
    </>
  );
};

Index.getInitialProps = async ({ store, req }: WithReduxNextPageContext) => {
  return;
};
export default Index;
