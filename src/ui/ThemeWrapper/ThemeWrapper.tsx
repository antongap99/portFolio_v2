import {FC, ReactNode, useState} from "react";
import cn from "classnames";
import './theme.css'
interface ThemeWrapperProps {
    children: ReactNode
}
const ThemeWrapper: FC<ThemeWrapperProps> = ({children}) => {
    const [theme, setTheme]= useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        if (theme === 'light'){
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    return (
        <div className={cn(theme)}>
            <button className='theme__btn' onClick={toggleTheme}>Переключатель</button>
            {children}
        </div>
    );
}


export default ThemeWrapper;