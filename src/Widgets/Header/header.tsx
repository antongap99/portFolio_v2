import {FC, ReactNode} from 'react';
import style from './header.module.css'

interface HeaderProps {
    children: ReactNode
}
const Header: FC<HeaderProps> = ({children}) => {
    return (
        <div className={style.header__wrapper}>
            {children}
        </div>
    );
}

export default Header;