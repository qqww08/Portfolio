import React, { useEffect, useState } from "react";

import Detail from "~/components/Template/Detail";

import Header from "~/components/Layout/Header";
import { WithReduxNextPageContext } from "~/interfaces";
import { loginCheck } from "~/utils/loginCheck";
import Comment from "~/components/Template/Comment";
import { getBoardDetailAPI } from "~/APIs/board";
import { useRouter } from "next/router";
import { END } from "@redux-saga/core";

const Index = () => {
  const router = useRouter();
  const [detail, setDetail] = useState(null);
  const useBoardDetailAPI = () => {
    getBoardDetailAPI(router.query.id).then((res) => {
      setDetail(res.data);
    });
  };
  useEffect(() => {
    // 상세페이지 api 호출
    useBoardDetailAPI();
  }, []);
  const clearHandler = () => {
    useBoardDetailAPI();
  };
  return (
    <Header>
      <Detail list={detail} clearBoardHandler={clearHandler} />
      <Comment list={detail} />
    </Header>
  );
};
Index.getInitialProps = async ({ store, req }: WithReduxNextPageContext) => {
  await loginCheck(store, req);
  store.dispatch(END);
  return;
};
export default Index;
