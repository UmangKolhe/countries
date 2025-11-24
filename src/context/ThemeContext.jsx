// src/context/ThemeContext.jsx

import { createContext, useState, useEffect } from "react";

// 1️⃣ Create a context so we can share theme state across the app
export const ThemeContext = createContext();

// 2️⃣ This component will wrap the whole app and provide theme values
export const ThemeProvider = ({ children }) => {

  // 3️⃣ Create a state for theme
  // First check localStorage → if theme exists there, use it
  // Otherwise default to "light"
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // 4️⃣ Function to toggle theme between light and dark
  const toggleTheme = () => {
    // If previous theme was light → dark
    // If dark → light
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  // 5️⃣ Every time theme changes, run this code
  useEffect(() => {

    // (a) Save updated theme to localStorage
    // This keeps the theme even after refreshing the page
    localStorage.setItem("theme", theme);

    // (b) Add CSS classes to <body> to change background/text colors
    if (theme === "dark") {
      // Apply dark mode classes
      document.body.className = " bg-gray-900 text-white";
    } else {
      // Apply light mode classes
      document.body.className = "bg-white text-black";
    }

  }, [theme]); // Runs whenever "theme" changes



  // 6️⃣ Provide the theme values to the whole React app
  // Now any component can use theme and toggleTheme using useContext()
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children} {/* Everything inside <ThemeProvider> ... </ThemeProvider> */}
    </ThemeContext.Provider>
  );
};

