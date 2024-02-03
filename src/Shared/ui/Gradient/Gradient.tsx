import cn from "classnames";
import style from './gradient.module.css'
interface  GradientProps {
    classname: 'hero-projects' | 'projects-footer';
}
const Gradient = ({classname}: GradientProps) => {
    return (
        <section className={cn(style['gradient-section'], style[classname])}>
        </section>
    )
};

export default Gradient;