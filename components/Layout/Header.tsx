import React, { ReactNode } from "react";
import { MeInterface } from "~/store/global/interfaces";
import { useSelector } from "react-redux";
import { State } from "~/interfaces";
import useModalState from "~/hooks/useModalState";
import { createPortal } from "react-dom";
import ProfileUpdatePopup from "~/components/Template/ProfileUpdatePopup";
import cookie from "js-cookie";
const Portal = ({ children }) => {
  const modalRoot = document.getElementById("__portal");

  return createPortal(children, modalRoot);
};
const Header = ({ children }: { children: ReactNode }) => {
  const me: MeInterface = useSelector((state: State) => state.getGlobal.me);
  const popup = useModalState();
  const logoutHandler = () => {
    cookie.remove("user");
    window.location.reload();
  };
  return (
    <div className="header-wrap">
      <div className="header-profile-wrap">
        <div className="header-profile-item">
          <img src={me?.avatar} className="header-avatar" />
          <p className="header-name">{me?.name}</p>
        </div>
        <div className="header-btn">
          <button onClick={popup.open}>프로필 수정</button>
          <button onClick={logoutHandler}>로그아웃</button>
        </div>
      </div>
      {popup.if(
        <Portal>
          <ProfileUpdatePopup close={popup.close} />
        </Portal>
      )}
      {children}
    </div>
  );
};

export default React.memo(Header);
