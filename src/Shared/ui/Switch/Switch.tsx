import style from './switch.module.css'
import cn from "classnames";

interface SwitchProps {
    cb?: () => void;
    value: boolean;
    classname?: string
}

const Switch = ({cb, value, classname}:SwitchProps) => {
    return (
        <label className={cn(style.toggle, classname)} onChange={() => cb?.()}>
            <input className={style.input} type="checkbox" checked={value}/>
            <span className={style.slider}></span>
        </label>
    );
};

export default Switch;