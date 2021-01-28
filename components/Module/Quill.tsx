import React, { useEffect, useRef } from "react";

const Quill = ({ onChange, contents = "" }) => {
  const Quill: any =
    typeof window === "object" ? require("quill") : () => false;

  const quillElement = useRef(null); // quill을 넣을 div
  const quillInstance = useRef(null); // quill 인스턴스

  const modules = {
    toolbar: {
      container: [
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ list: "ordered" }, { list: "bullet" }],
      ],
    },
  };

  useEffect(() => {
    if (quillElement.current) {
      quillInstance.current = new Quill(quillElement.current, {
        theme: "snow",
        placeholder: "내용을 입력해주세요",
        modules: modules,
      });
      // 퀼 인스턴스를 편하게 쓰기 위해 변수 설정
      const quill: any = quillInstance.current;
      // 텍스트를 쳤을 때 state에 담기
      quill.on("text-change", (delta, oldDelta, source) => {
        onChange(quill.root.innerHTML);
      });
    }
  }, []);

  // 기존 내용을 가져오기 위함(수정)
  const mounted = useRef(false);
  useEffect(() => {
    if (contents === "" || mounted.current) return;
    mounted.current = true;
    // @ts-ignore
    quillInstance.current.root.innerHTML = contents;
  }, [contents]);

  return (
    <>
      <div style={{ minHeight: "30rem" }} ref={quillElement}></div>
    </>
  );
};

export default Quill;
