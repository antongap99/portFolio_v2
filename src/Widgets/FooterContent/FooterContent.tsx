import style from './footerContext.module.css'
import Logo from "../Header/Logo/Logo.tsx";

const FooterContent = () => {
    return (
        <div className={style.footerContent}>
            <Logo classname='footer__logo'/>
            <ul className={style.footerNavigation}>
                <li>
                    <a href="#" target="_blank" rel="noreferrer" className={style.footerNavigation__link}>Telegram</a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noreferrer" className={style.footerNavigation__link}>Vkontakte</a>
                </li>
                <li>
                    <a href="#" target="_blank" rel="noreferrer" className={style.footerNavigation__link}>GitHub</a>
                </li>
            </ul>
            <p className={style.footer__copyRight}>© 2024 Anton Gaponenko</p>
        </div>
    )
};

export default FooterContent;