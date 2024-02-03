import cn from "classnames";
import style from './hero.module.css'
import Button from "../../Shared/ui/Button/Button.tsx";
const Hero = () => (
    <div className={cn(style.hero)}>
        <h1 className={cn(style.hero__title)}>Гапоненко Антон</h1>
        <p className={cn(style.hero__subtitle)}>Фронтенд разработчик</p>
        <Button>
            Обо мне
        </Button>
    </div>
);

export default Hero;