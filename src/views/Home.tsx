import {useState, useRef, useEffect} from "react";
export const HomeView = () => {
    // Part of the Text area component
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const [text,setText] = useState<string>("");
    const [textAreaHeight, setTextAreaHeight] = useState<number>(50);

    useEffect(() => {
        const textArea = textAreaRef.current;
        if(!textArea) return;

        textArea.style.height = "auto";

        const newHeight = Math.max(textArea.scrollHeight, 50);
        textArea.style.height = `${newHeight}px`;
        setTextAreaHeight(newHeight);
    },[text]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setText(e.target.value); }

    return (
        <>
            <main className="w-full h-full bg-ocean-700 text-white flex items-center justify-center p-4">
                <section className="w-full p-4 flex items-center justify-center border">
                    <div className=" flex flex-col items-center justify-center gap-[20px]">
                        <h1 className="font-bold text-4xl text-center">What do you need?</h1>
                        {/*    This should be a component*/}
                        <textarea
                            ref={textAreaRef}
                            value={text}
                            onChange={handleChange}
                            autoFocus
                            name="user-input-text"
                            className={`h-[${textAreaHeight}px] bg-ocean-600 outline-none border-none rounded-md w-full p-2 text-white resize-none`} />
                    </div>
                </section>
            </main>
        </>
    );
};

