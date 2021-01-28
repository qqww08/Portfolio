import React from "react";

interface Props {
  list: any;
}

const BoardItem = ({ list }: Props) => {
  return (
    <div className="bi-wrap">
      <p className="bi-no"></p>
      <p className="bi-title"></p>
      <p className="bi-nick"></p>
      <p className="bi-avatar"></p>
    </div>
  );
};

export default BoardItem;
