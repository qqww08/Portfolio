import React, { ReactNode } from "react";
import { MeInterface } from "~/store/global/interfaces";
import { useSelector } from "react-redux";
import { State } from "~/interfaces";
import useModalState from "~/hooks/useModalState";
import { createPortal } from "react-dom";
import ProfileUpdatePopup from "~/components/Module/ProfileUpdatePopup";

const Portal = ({ children }) => {
  const modalRoot = document.getElementById("__portal");

  return createPortal(children, modalRoot);
};
const Header = ({ children }: { children: ReactNode }) => {
  const me: MeInterface = useSelector((state: State) => state.getGlobal.me);
  const popup = useModalState();
  return (
    <div className="header-wrap">
      <div className="header-profile-wrap">
        <img src={me.avatar} className="header-avatar" />
        <p className="header-name">{me.name}</p>
        <button onClick={popup.open}>수정</button>
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

export default Header;
