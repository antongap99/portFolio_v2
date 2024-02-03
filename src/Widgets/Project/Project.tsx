import style from "./project.module.css";
import Button from "../../Shared/ui/Button/Button.tsx";

interface  ProjectProps {
    name: string
    description: string,
    index: number
}
const Project = ({name, description, index}: ProjectProps) => {

    const renderProjectIndex = (projectIndex: number) : string => {
        return projectIndex < 10 ? `0${projectIndex}`: `${projectIndex}`
    }

    return (
        <div className={style.project}>
            <div className={style.projectHeader}>
                <div className={style.projectTitleWrapper}>
                    <div className={style.projectCountWrapper}>
                        <span className={style.projectCount}>{renderProjectIndex(index)}</span>
                    </div>
                    <h2 className={style.projectTitle}>{name}</h2>
                </div>
                <div className={style.descriptionWrapper}>
                    <div className="div-block-28">
                        <Button>
                            Посетить
                        </Button>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Project;