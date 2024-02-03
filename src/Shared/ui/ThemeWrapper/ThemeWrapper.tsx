import {FC, ReactNode} from "react";
import cn from "classnames";
import './../../../Shared/assets/styles/theme.css'
import {useTheme} from "../../hooks/useTheme.ts";
import Switch from "../Switch/Switch.tsx";

interface ThemeWrapperProps {
    children: ReactNode
}
const ThemeWrapper: FC<ThemeWrapperProps> = ({children}) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={cn(theme)}>
            <Switch classname='theme__btn' value={theme==='light'} cb={toggleTheme} />
            {children}
        </div>
    );
}


export default ThemeWrapper;