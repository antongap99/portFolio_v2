import style from "./project.module.css";
import ImagePreviewWrapper from "../../Shared/ui/ImagePreviewWrapper/ImagePreviewWrapper.tsx";
import cn from "classnames";

interface  ProjectProps {
    name: string
    description: string,
    index: number,
    preview: string
}
const Project = ({name, description, index, preview}: ProjectProps) => {

    const renderProjectIndex = (projectIndex: number) : string => {
        return projectIndex < 10 ? `0${projectIndex}`: `${projectIndex}`
    }
    console.log('index % 2  === 0 ',index,  index % 2  === 0 )
    return (
        <div className={style.project}>
            <div className={style.projectCountWrapper}>
                <span className={cn(style.projectCount)}>{renderProjectIndex(index)}</span>
            </div>
            <ImagePreviewWrapper
                src={`${import.meta.env.BASE_URL}${preview}`}
                alt={`preview-${name}`}
                classname={`projectPreview`}
            >
                <div className={style.projectContentWrapper}>
                   <div className={style.projectContent}>
                       <div className={style.projectTitleWrapper}>
                           <h2 className={style.projectTitle}>{name}</h2>
                       </div>
                       <div className={style.projectHeader}>
                           <div className={style.descriptionWrapper}>
                               <p>{description}</p>
                           </div>
                       </div>
                   </div>
                </div>
            </ImagePreviewWrapper>
        </div>
    );
};

export default Project;