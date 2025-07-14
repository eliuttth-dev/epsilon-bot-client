import { useEffect, useState } from "react";
import { systemDefaultThemeSelector } from "../utils/toggleTheme";

export const ThemeSelector = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const stored = localStorage.getItem("theme");
    return stored === "light" || stored === "dark"
      ? stored
      : systemDefaultThemeSelector();
  });

  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <button onClick={changeTheme}>Change Theme</button>;
};
