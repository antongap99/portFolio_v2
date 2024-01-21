import {FC, ReactNode} from 'react';
import style from './section.module.css'
import cn from "classnames";
interface  SectionProps {
    title?: string,
    height: number | null,
    children: ReactNode,
    classname: string
}

const Section: FC<SectionProps> = ({children, height, title, classname}) =>  {
    return (
        <div style={{height: height ?  `${height}vh` : `100vh` }} className={cn(style.section, classname)}>
            {title && <h2 className={style.section__title}>{title}</h2>}
            <div className={style.section__content}>
                {children}
            </div>
        </div>
    );
}

export default Section;