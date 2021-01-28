import React, { useCallback, useRef, useState } from "react";
import { CommentInterface } from "~/interfaces";
import AvatarItem from "~/components/Module/AvatarItem";
import { deleteCommentAPI, putCommentAPI } from "~/APIs/comment";
interface Props {
  list: CommentInterface;
  clearCommentProps: () => void;
}
const CommentItem = ({ list, clearCommentProps }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const txtAreaPush = () => {
    setText(list.contents);
    setEdit(!edit);
  };
  // 댓글 수정 기능
  const putHandler = useCallback(() => {
    const obj = {
      contents: text,
      boardId: list.boardId,
      user: list.user,
    };
    putCommentAPI(list.id, obj).then(() => {
      setText("");
      setEdit(!edit);
      clearCommentProps();
    });
  }, [text, edit, list]);
  //댓글 삭제
  const deleteHandler = () => {
    deleteCommentAPI(list?.id).then(() => {
      clearCommentProps();
    });
  };
  return (
    <div className="ci-wrap">
      <div className="ci-avatar">
        <AvatarItem name={list?.user?.name} avatar={list?.user?.avatar} />
        <div className="ci-edit-btn">
          <button onClick={() => (edit ? putHandler() : txtAreaPush())}>
            {edit ? "완료" : "수정"}
          </button>
          <button onClick={() => (edit ? setEdit(!edit) : deleteHandler())}>
            {edit ? "취소" : "삭제"}
          </button>
        </div>
      </div>
      {edit ? (
        <textarea
          className="comment-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <p className="ci-contents">{list.contents}</p>
      )}
    </div>
  );
};

export default React.memo(CommentItem);
