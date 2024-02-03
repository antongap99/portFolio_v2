import cn from "classnames";
import style from "./button.module.css";
import {ReactNode} from "react";

interface ButtonProps {
    cb?: () => void;
    children: ReactNode | string
}


const Button = ({cb, children}: ButtonProps) =>  {
    const buttonClickHandler:(e: Event) => void = (e: Event) => {
        e.preventDefault()
        cb && cb()
    }

    return (
        <>
            <button onClick={() => buttonClickHandler} className={cn(style.hero__btn)}>
                {children}
            </button>
        </>
    )
};

export default Button;