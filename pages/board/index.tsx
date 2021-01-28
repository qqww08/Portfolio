import React, { useEffect } from "react";
import { State, WithReduxNextPageContext } from "~/interfaces";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { loginCheck } from "~/utils/loginCheck";
import { MeInterface } from "~/store/global/interfaces";
import Header from "~/components/Layout/Header";
import Board from "~/components/Template/Board";

const Index: NextPage = () => {
  const me: MeInterface = useSelector((state: State) => state.getGlobal.me);
  return (
    <Header>
      <Board />
    </Header>
  );
};

Index.getInitialProps = async ({ store, req }: WithReduxNextPageContext) => {
  await loginCheck(store, req);
  return;
};

export default Index;
