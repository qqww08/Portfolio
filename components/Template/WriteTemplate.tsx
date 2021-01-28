import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Quill from "~/components/Module/Quill";
import { MeInterface } from "~/store/global/interfaces";
import { useSelector } from "react-redux";
import { State } from "~/interfaces";
interface Inputs {
  title: string;
}
const WriteTemplate = () => {
  const [contents, setContents] = useState<string>("");
  const me: MeInterface = useSelector((state: State) => state.getGlobal.me);
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit = (data) => {
    const obj = {
      title: data.title,
      contents: contents,
      user: me,
    };
    console.log(obj);
    console.log(contents);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="write-wrap">
      <div className="write-head-wrap">
        <input
          name="title"
          type="text"
          placeholder="제목을 입력해주세요"
          ref={register({ required: true })}
          className="write-title"
        />
        <button type="submit">등록</button>
      </div>
      <Quill onChange={setContents} contents={contents} />
    </form>
  );
};

export default WriteTemplate;
