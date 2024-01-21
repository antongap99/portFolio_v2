import {FC} from "react";
import style from './navigation.module.css'

interface NavigationProps {
    list: string[]
}

const Navigation: FC<NavigationProps> = ({list}) => {
    return (
        <nav className={style.navigation}>
            <ul className={style.navigation__list}>
                {list.map(item => (
                    <li className={style.navigation__item}>
                        <span className={style.navigation__text}>
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
        )
};

export default Navigation;