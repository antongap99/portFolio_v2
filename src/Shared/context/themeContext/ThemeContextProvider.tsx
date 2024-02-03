import {createContext, useState, useEffect, ReactNode, FC} from 'react';
interface ThemeContext {
    theme: string,
    toggleTheme?: () => void
}

export enum ThemeEnum {
    Light = "light",
    Dark = "dark",
}
export const themeContext = createContext<ThemeContext>({
    theme: ThemeEnum.Light
});

interface ThemeProviderProps {
    children: ReactNode
}
const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const PREFERS_COLOR = ThemeEnum.Dark;


    const [theme, setTheme] = useState(
        localStorage.getItem("app-theme") || PREFERS_COLOR
    );

    useEffect(() => {
        localStorage.setItem("app-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        console.log('toggleTheme');
        setTheme((prevTheme) =>
            prevTheme === ThemeEnum.Light ? ThemeEnum.Dark : ThemeEnum.Light
        );
    };

    return (
        <themeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </themeContext.Provider>
    );
};



export {
    ThemeProvider
};