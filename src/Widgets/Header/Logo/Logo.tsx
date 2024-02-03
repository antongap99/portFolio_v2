import {useTheme} from "../../../Shared/hooks/useTheme.ts";
import LogoSvg from "../../../Shared/svg/LogoSvg.tsx";
import LogoSvgLight from "../../../Shared/svg/LogoSvgLight.tsx";
import {FC} from "react";
import cn from "classnames";

interface LogoProps {
    classname?: string
}

const Logo: FC<LogoProps> = ({classname}) => {
    const {theme} = useTheme()
    return (
        theme === 'light' ? (
                <LogoSvgLight className={cn('logo_light', classname)}/>
            ): (
                <LogoSvg  className={cn('logo_dark', classname)}/>
            )
    )
};

export default Logo;