import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Quill from "~/components/Module/Quill";
import { MeInterface } from "~/store/global/interfaces";
import { useSelector } from "react-redux";
import { State } from "~/interfaces";
import { writeAPI } from "~/APIs/board";
import { useRouter } from "next/router";
interface Inputs {
  title: string;
}
const WriteTemplate = () => {
  const [contents, setContents] = useState<string>("");
  const me: MeInterface = useSelector((state: State) => state.getGlobal.me);
  const { register, handleSubmit } = useForm<Inputs>();
  const router = useRouter();
  const onSubmit = useCallback(
    (data) => {
      const obj = {
        title: data.title,
        contents: contents,
        user: me,
      };
      writeAPI(obj).then((res) => {
        router
          .replace(`/board/${res.data.id}`)
          .then(() => window.scrollTo(0, 0));
      });
    },
    [contents, handleSubmit, me]
  );
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

export default React.memo(WriteTemplate);
