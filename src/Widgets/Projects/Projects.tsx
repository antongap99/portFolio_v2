import {useData} from "../../Shared/hooks/useData.ts";
import {ProjectsData} from "../../Shared/interfaces/interfaces.ts";
import style from './projects.module.css'
import Project from "../Project/Project.tsx";
const url =  './projects.json'

export const Projects = () => {
    const {data, loading, error } = useData<ProjectsData>({url})

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Ошибка</p>;
    }


    if(data) {
        return (
            <div className={style.projectsWrapper}>
                {data.map((project, index) => (
                    <Project
                        key={project.id}
                        index={index + 1}
                        name={project.name}
                        description={project.description}
                        preview={project.preview}
                        link={project.link}
                    />
                ))}
            </div>
        )
    }


    return (
        <>
            нет данных
        </>
    )
}

