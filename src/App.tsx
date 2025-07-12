import { HomeView } from "./views/Home.tsx";
import { ThemeSelector } from "./components/ThemeSelector";


export const App = () => {
  return (
    <>
      <HomeView />
      <ThemeSelector />
    </>
  );
};
