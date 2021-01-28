import React, { useCallback, useEffect, useRef, useState } from "react";
import { DetailInterface } from "~/interfaces";
import AvatarItem from "~/components/Module/AvatarItem";
import { useRouter } from "next/router";
import { getCommentAPI, postCommentAPI } from "~/APIs/comment";
import CommentItem from "~/components/Module/CommentItem";
interface Props {
  list: DetailInterface;
}
const Comment = ({ list }: Props) => {
  const txtAreaRef = useRef<HTMLTextAreaElement>(null);
  const [comment, setComment] = useState(null);
  const router = useRouter();
  const useCommentAPI = () => {
    getCommentAPI(Number(router.query.id)).then((res) => setComment(res));
  };
  const clearAPIHandler = () => {
    useCommentAPI();
  };
  useEffect(() => {
    useCommentAPI();
  }, []);
  const submit = useCallback(() => {
    const obj = {
      boardId: Number(router.query.id),
      contents: txtAreaRef.current.value,
      user: list.user,
    };
    postCommentAPI(obj).then(() => {
      txtAreaRef.current.value = "";
      useCommentAPI();
    });
  }, [router, txtAreaRef, list]);
  return (
    <div className="comment-wrap">
      {comment?.map((item) => {
        return (
          <CommentItem
            list={item}
            key={item.id}
            clearCommentProps={clearAPIHandler}
          />
        );
      })}

      <div className="comment-avatar">
        <AvatarItem name={list?.user?.name} avatar={list?.user?.avatar} />
        <button onClick={submit}>등록</button>
      </div>
      <textarea className="comment-textarea" ref={txtAreaRef} />
    </div>
  );
};

export default React.memo(Comment);
