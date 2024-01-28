import {FC, ReactNode} from "react";
import cn from "classnames";
import './../../Shared/assets/styles/theme.css'
import {ThemeEnum, useTheme} from "../../Shared/hooks/useTheme.ts";
interface ThemeWrapperProps {
    children: ReactNode
}
const ThemeWrapper: FC<ThemeWrapperProps> = ({children}) => {
    const {theme, setTheme} =useTheme()

    const toggleTheme = () => {
        if(theme === 'dark'){
            setTheme(ThemeEnum.default);
        } else {
            setTheme(ThemeEnum.dark)
        }
    }

    return (
        <div className={cn(theme)}>
            <button className='theme__btn' onClick={toggleTheme}>Тема</button>
            {children}
        </div>
    );
}


export default ThemeWrapper;