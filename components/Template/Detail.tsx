import React, { useCallback, useEffect, useRef, useState } from "react";
import { DetailInterface, State } from "~/interfaces";
import Quill from "~/components/Module/Quill";
import {
  deleteDetailAPI,
  getBoardDetailAPI,
  putBoardDetailAPI,
} from "~/APIs/board";
import { useRouter } from "next/router";
import { MeInterface } from "~/store/global/interfaces";
import { useSelector } from "react-redux";
import AvatarItem from "~/components/Module/AvatarItem";
interface Props {
  list: DetailInterface;
  clearBoardHandler: () => void;
}
const Detail = ({ list, clearBoardHandler }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const titleRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const [contents, setContents] = useState<string>(list?.contents);
  const [title, setTitle] = useState<string>(list?.title);
  const me: MeInterface = useSelector((state: State) => state.getGlobal.me);

  const putBtn = () => {
    setContents(list?.contents);
    setTitle(list?.title);
    setEdit(!edit);
  };
  // 수정 완료 버튼
  const editHandler = useCallback(() => {
    const title = titleRef.current?.value;
    // 제목이 비어있다면
    if (title === "" || contents === "") {
      alert("빈칸을 입력해주세요");
    }
    const obj = {
      title: title,
      contents: contents,
      user: me,
    };
    /*
     * 상세페이지 수정 api
     *  @params detail.id - 게시판 번호
     *  @params obj - 수정 할 데이터
     */
    putBoardDetailAPI(list?.id, obj).then(() => {
      //상세페이지 수정 api 끝난 후 useBoardDetailAPI 호출
      clearBoardHandler();
      setEdit(!edit);
    });
  }, [contents, edit, list, router, titleRef, me]);
  // 상세페이지 삭제 api
  const deleteDetailHandler = () => {
    deleteDetailAPI(list?.id).then(() => {
      router.replace("/board").then(() => window.scrollTo(0, 0));
    });
  };
  return (
    <div className="detail-wrap">
      {edit ? (
        <div className="detail-header">
          <input
            value={title}
            ref={titleRef}
            onChange={(e) => setTitle(e.target.value)}
          />
          <AvatarItem name={list?.user?.name} avatar={list?.user?.avatar} />
        </div>
      ) : (
        <div className="detail-header">
          <p>{list?.title}</p>
          <AvatarItem name={list?.user?.name} avatar={list?.user?.avatar} />
        </div>
      )}
      {me?.id === list?.user?.id && (
        <div className="detail-edit">
          <button onClick={() => (edit ? editHandler() : putBtn())}>
            {edit ? "등록" : "수정"}
          </button>
          <button
            onClick={() => (edit ? setEdit(!edit) : deleteDetailHandler())}
          >
            {edit ? "취소" : "삭제"}
          </button>
        </div>
      )}
      {edit ? (
        <div>
          <Quill onChange={setContents} contents={contents} />
        </div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: list?.contents }}></div>
      )}
    </div>
  );
};

export default React.memo(Detail);
