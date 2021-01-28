import React, { useCallback, useEffect, useRef, useState } from "react";
import UseFormInput from "~/components/Module/UseFormInput";
import { useForm } from "react-hook-form";
import { imageUploadAPI } from "~/APIs/image";
import { registerAPI } from "~/APIs/users";
import { useRouter } from "next/router";
interface Inputs {
  email: string;
  password: string;
}
const Register = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const [avatar, setAvatar] = useState<string>("images/download.png");
  const router = useRouter();
  const uploadHandler = (e) => {
    imageUploadAPI(e).then((res) => setAvatar(res));
  };
  const onSubmit = useCallback(
    (data) => {
      const obj = {
        email: data.email,
        password: data.password,
        name: data.name,
        avatar: avatar,
      };
      registerAPI(obj).then((res) => {
        router.push("/").then(() => window.scrollTo(0, 0));
      });
    },
    [handleSubmit, avatar]
  );
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rg-wrap">
      <label htmlFor="img-up" className="rg-avatar">
        <img src={avatar} />
      </label>
      <input
        type="file"
        onChange={uploadHandler}
        name="avatar"
        hidden
        id="img-up"
      />
      <UseFormInput
        name={"email"}
        placeholder={"email"}
        type={"email"}
        register={register}
        errors={errors}
        message={"이메일을 입력 해주세요"}
      />
      <UseFormInput
        name={"password"}
        placeholder={"password"}
        type={"password"}
        register={register}
        errors={errors}
        message={"패스워드를 입력 해주세요"}
      />
      <UseFormInput
        name={"name"}
        placeholder={"name"}
        type={"text"}
        register={register}
        errors={errors}
        message={"이름을 입력 해주세요"}
      />

      <button type="submit">회원가입</button>
    </form>
  );
};

export default React.memo(Register);
