import React from "react";
interface Props {
  name: string;
  avatar: string;
}
const AvatarItem = ({ name, avatar }: Props) => {
  return (
    <div className="avatar-wrap">
      <img src={avatar} />
      <p>{name}</p>
    </div>
  );
};

export default React.memo(AvatarItem);
