import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { registerAPI, updateUserAPI, userAPI } from "~/APIs/users";
import UseFormInput from "~/components/Module/UseFormInput";
import { MeInterface } from "~/store/global/interfaces";
import { useSelector } from "react-redux";
import { State } from "~/interfaces";
import { imageUploadAPI } from "~/APIs/image";
interface Inputs {
  email: string;
  password: string;
  name: string;
}
interface Props {
  close: () => void;
}
const ProfileUpdatePopup = ({ close }: Props) => {
  const me: MeInterface = useSelector((state: State) => state.getGlobal.me);
  const [avatar, setAvatar] = useState<string>(me.avatar);
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const uploadHandler = (e) => {
    imageUploadAPI(e).then((res) => setAvatar(res));
  };
  const onSubmit = (data) => {
    const obj = {
      id: me.id,
      email: me.email,
      password: data.password,
      name: data.name,
      avatar: avatar,
    };
    updateUserAPI(obj).then((res) => console.log(res));
  };
  return (
    <div className="pup-wrap flex-center">
      <form onSubmit={handleSubmit(onSubmit)} className="pup-form">
        <label htmlFor="img-up" className="rg-avatar">
          <img src={avatar} className="pup-avatar" />
        </label>
        <input
          type="file"
          onChange={uploadHandler}
          name="avatar"
          hidden
          id="img-up"
        />
        <p className="pup-value">{me.email}</p>
        <UseFormInput
          name={"password"}
          type={"password"}
          placeholder={"password"}
          register={register}
          errors={errors}
          message={"패스워드를 입력 해주세요"}
        />
        <UseFormInput
          name={"name"}
          type={"name"}
          placeholder={"name"}
          register={register}
          errors={errors}
          defaultValue={me.name}
          message={"이름을 입력 해주세요"}
        />
        <button type="submit">수정</button>
        <button onClick={close}>취소</button>
      </form>
    </div>
  );
};

export default ProfileUpdatePopup;
