import cn from "classnames";
import {ReactNode} from "react";

interface ImagePreviewProps {
    src: string,
    classname?: string,
    alt: string,
    children: ReactNode
}
const ImagePreviewWrapper = ({src, classname, children}: ImagePreviewProps) => {
    return (
        <div className={cn('imagePreview', classname)} style={ {backgroundImage: `url(${src})`}}>
            {children}
        </div>
    );
};

export default ImagePreviewWrapper;