import React from "react";
import { useRouter } from "next/router";

const Board = () => {
  const router = useRouter();
  return (
    <div className="board-warp">
      <button
        onClick={() =>
          router.push("/board/write").then(() => window.scrollTo(0, 0))
        }
      >
        글쓰기
      </button>
    </div>
  );
};

export default Board;
