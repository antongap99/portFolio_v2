import {useTheme} from "../../../Shared/hooks/useTheme.ts";
import LogoSvg from "../../../Shared/svg/LogoSvg.tsx";
import LogoSvgLight from "../../../Shared/svg/LogoSvgLight.tsx";


const Logo = () => {
    // TODO Нужно переменую передавать через контекст
    const {theme} = useTheme()
    return (
        theme === 'light' ? (
                <LogoSvgLight className={'logo_light'}/>
            ): (
                <LogoSvg  className={'logo_dark'}/>
            )
    )
};

export default Logo;