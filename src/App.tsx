import { HomeView } from "./views/Home.tsx";
import { ThemeSelector } from "./components/ThemeSelector";

export const App = () => {
  return (
    <div className="w-full h-screen overflow-y-hidden">
      <HomeView />
      <ThemeSelector />
    </div>
  );
};
