import { Sun, Moon } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {

  const { theme, toggleTheme } = useTheme();

  

  return (
    <div
      onClick={toggleTheme}
      className="
        relative
        h-[28px]
        w-[50px]
        cursor-pointer
        rounded-full
        border
        border-[#4B50D8]
        bg-white
        px-1
      "
    >
      <div
        className={`
          absolute
          top-1/2
          flex
          h-[20px]
          w-[20px]
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-[#4B50D8]
          text-white
          transition-all
          duration-500
          ease-[cubic-bezier(0.34,1.56,0.64,1)]

          ${
            theme === "light"
              ? "left-[25px]"
              : "left-[3px]"
          }
        `}
      >
        {theme === "light" ? (
           <Sun
            size={12}
            strokeWidth={2}
          />
        ) : (
         
          <Moon
            size={12}
            strokeWidth={2}
          />
        )}
      </div>
    </div>
  );
}

export default ThemeToggle;