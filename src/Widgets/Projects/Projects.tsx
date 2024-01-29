import {useData} from "../../Shared/hooks/useData.ts";
import {ProjectsData} from "../../Shared/interfaces/interfaces.ts";
import style from './project.module.css'
const url =  './../../../public/projects.json'

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
            <div className={style.cardWrapper}>
                {data.map(project => (
                    <div key={project.id} className={style.card}>
                        <h2>{project.name}</h2>
                        <p>{project.description}</p>
                    </div>
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

