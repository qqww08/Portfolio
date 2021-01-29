import React, { useEffect, useState } from "react";
import { State, WithReduxNextPageContext } from "~/interfaces";
import { NextPage } from "next";
import { useSelector } from "react-redux";
import { loginCheck } from "~/utils/loginCheck";
import { MeInterface } from "~/store/global/interfaces";
import Header from "~/components/Layout/Header";
import Board from "~/components/Template/Board";
import { getBoardListAPI } from "~/APIs/board";
import Axios from "axios";

const Index: NextPage = () => {
  const [list, setList] = useState(null);
  useEffect(() => {
    if (process.browser) {
      const boardAPI = async () => {
        const data = await getBoardListAPI();
        setList(data);
      };
      boardAPI();
    }
  }, []);
  return (
    <Header>
      <Board list={list?.data} />
    </Header>
  );
};

Index.getInitialProps = async ({ store, req }: WithReduxNextPageContext) => {
  await loginCheck(store, req);

  return;
};

export default Index;
