import React, { useCallback } from "react";
import { useRouter } from "next/router";

interface Props {
  list: any;
}

const BoardItem = ({ list }: Props) => {
  const router = useRouter();
  const pushHandler = useCallback(() => {
    router.push(`/board/${list.id}`);
  }, [list]);
  return (
    <div className="bi-wrap" onClick={() => pushHandler()}>
      <p className="bi-no">{list.id}</p>
      <p className="bi-title">{list.title}</p>
      <p className="bi-nick">{list.user?.name}</p>
      <div className="bi-avatar">
        <img src={list.user?.avatar} />
      </div>
    </div>
  );
};

export default React.memo(BoardItem);
