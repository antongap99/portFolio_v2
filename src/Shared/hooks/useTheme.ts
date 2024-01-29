import {useContext} from "react";
import {themeContext} from "../context/themeContext/ThemeContextProvider.tsx";



// Определение цвета на основании цветовой схемы ОС
// const isDarkTheme = window?.matchMedia("(prefers-color-scheme: dark)").matches;
// const PREFERS_COLOR = isDarkTheme ? ThemeEnum.dark : ThemeEnum.default;


export const useTheme = () => {
    const context = useContext(themeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};
