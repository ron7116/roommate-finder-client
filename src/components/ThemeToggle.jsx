import { useEffect } from "react";

const ThemeToggle = () => {
  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  const handleToggle = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        onChange={handleToggle}
        defaultChecked={localStorage.getItem("theme") === "dark"}
      />

      {/* Sun icon for dark mode */}
      <svg
        className="swap-on fill-current w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64 17.66L4.22 19.07 2.81 17.66l1.41-1.41zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9.19-2.34l1.41-1.41-1.41-1.41-1.41 1.41zM20 13h3v-2h-3v2zm-9-9h2V1h-2v3zm7.66 2.34l1.41-1.41L18.66 3.5l-1.41 1.41zM12 6a6 6 0 100 12 6 6 0 000-12z" />
      </svg>

      {/* Moon icon for light mode */}
      <svg
        className="swap-off fill-current w-6 h-6"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.75 15.5a9 9 0 01-11.25-11.25 9 9 0 1011.25 11.25z" />
      </svg>
    </label>
  );
};

export default ThemeToggle;
