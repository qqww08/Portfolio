import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import UseFormInput from "~/components/Module/UseFormInput";
import { useRouter } from "next/router";
import { userAPI } from "~/APIs/users";
import cookie from "js-cookie";
interface Inputs {
  email: string;
  password: string;
}
const Login = () => {
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit = useCallback(
    (data) => {
      userAPI().then((res) => {
        const index = res.findIndex(
          (e) => e.email === data.email && e.password === data.password
        );
        // index 가 1이상 이면 유저 정보가 있음
        if (index > 0) {
          delete res[index].password;
          cookie.set("user", JSON.stringify(res[index]));
          router.push("/board").then(() => window.scrollTo(0, 0));
        } else {
          alert("아이디나 패스워드가 일치 하지 않습니다.");
        }
      });
    },
    [handleSubmit]
  );
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      <button type="submit">로그인</button>
      <button
        onClick={() =>
          router.push("/register").then(() => window.scrollTo(0, 0))
        }
      >
        회원가입
      </button>
    </form>
  );
};

export default Login;
