import cn from "classnames";
import style from './hero.module.css'
const Hero = () => (
    <div className={cn(style.hero)}>
        <h1 className={cn(style.hero__title)}>Гапоненко Антон</h1>
        <p className={cn(style.hero__subtitle)}>Фронтенд разработчик</p>
        <button className={cn(style.hero__btn)}>Об мне</button>
    </div>
);

export default Hero;