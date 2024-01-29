import {FC, ReactNode} from "react";
import cn from "classnames";
import './../../../Shared/assets/styles/theme.css'
import {useTheme} from "../../hooks/useTheme.ts";

interface ThemeWrapperProps {
    children: ReactNode
}
const ThemeWrapper: FC<ThemeWrapperProps> = ({children}) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={cn(theme)}>
            <button className='theme__btn' onClick={toggleTheme}>Тема</button>
            {children}
        </div>
    );
}


export default ThemeWrapper;