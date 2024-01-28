import {FC, ReactNode} from "react";
import style from './footer.module.css';

interface FooterProps {
    children: ReactNode
}

const Footer: FC<FooterProps> = ({children}) => {
    return (
        <footer className={style.footer}>
            {children}
        </footer>
    )
}

export default Footer;