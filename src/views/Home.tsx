import { UserInputTextArea } from "../components/UserInputTextArea";
export const HomeView = () => {
  return (
    <>
      <main className="w-full h-full bg-ocean-700 text-white flex items-center justify-center p-4">
        <section className="w-full p-4 flex items-center justify-center border">
          <div className=" flex flex-col items-center justify-center gap-[20px]">
            <h1 className="font-bold text-4xl text-center">
              What do you need?
            </h1>
            <UserInputTextArea />
          </div>
        </section>
      </main>
    </>
  );
};
