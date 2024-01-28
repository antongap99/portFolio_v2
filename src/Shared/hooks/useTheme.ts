import { useLayoutEffect, useState } from "react";

export enum ThemeEnum {
    default = "light",
    dark = "dark",
}

// Определение цвета на основании цветовой схемы ОС
// const isDarkTheme = window?.matchMedia("(prefers-color-scheme: dark)").matches;
// const PREFERS_COLOR = isDarkTheme ? ThemeEnum.dark : ThemeEnum.default;

const PREFERS_COLOR = ThemeEnum.dark;
// TODO Нужно переменую передавать через контекст

export const useTheme = () => {
    const [theme, setTheme] = useState<ThemeEnum>(
        (localStorage.getItem("app-theme") as ThemeEnum) || PREFERS_COLOR,
    );

    useLayoutEffect(() => {
        localStorage.setItem("app-theme", theme);
    }, [theme]);

    return { theme, setTheme };
};