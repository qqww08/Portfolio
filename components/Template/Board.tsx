import React from "react";
import { useRouter } from "next/router";
import BoardItem from "~/components/Module/BoardItem";
interface Props {
  list: any;
}
const Board = ({ list }: Props) => {
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
      {list?.map((item) => {
        return <BoardItem list={item} key={item.id} />;
      })}
    </div>
  );
};

export default React.memo(Board);
