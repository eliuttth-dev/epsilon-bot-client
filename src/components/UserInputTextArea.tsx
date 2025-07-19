import { useState, useRef, useEffect } from "react";

export const UserInputTextArea = () => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const [text, setText] = useState<string>("");
  const [textAreaHeight, setTextAreaHeight] = useState<number>(26);

  useEffect(() => {
    const textArea = textAreaRef.current;
    if (!textArea) return;

    textArea.style.height = "26px";

    const newHeight = Math.max(textArea.scrollHeight, 26);
    textArea.style.height = `${newHeight}px`;
    setTextAreaHeight(newHeight);
  }, [text]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <textarea
        ref={textAreaRef}
        value={text}
        onChange={handleChange}
        autoFocus
        name="user-input-text"
        className={`h-[${textAreaHeight}px] bg-ocean-600 outline-none border-none rounded-md w-full p-4 text-white resize-none`}
      />
    </>
  );
};
