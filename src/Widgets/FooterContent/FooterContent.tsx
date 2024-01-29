import style from './footerContext.module.css'
import Logo from "../Header/Logo/Logo.tsx";

const FooterContent = () => {
    return (
        <div className={style.footerContent}>
            <Logo classname='footer__logo'/>
            <ul className={style.footer_navigation}>
                <li>
                    <a href="#" target="_blank" rel="noreferrer" className={style.footer_navigation__link}>Telegram</a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noreferrer" className={style.footer_navigation__link}>Vkontakte</a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noreferrer" className={style.footer_navigation__link}>GitHub</a>
                </li>
            </ul>
            <p className={style.footer__copyRight}>© 2024 Anton Gaponenko</p>
        </div>
    )
};

export default FooterContent;