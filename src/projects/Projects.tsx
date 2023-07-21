import React from 'react';
import s from './Projects.module.css'
import st from '../common/styles/Container.module.css';
import nature1 from './nature1.jpg'
import nature2 from './nature2.jpg'
import Project from './project/Project';

export type ProjectType={
    id: number,
    name: string,
    description: string,
    pic: string
}


const Projects = () => {

    const project1: ProjectType={
        id: 0,
        name: 'Blabla',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a fringilla mi. Suspendisse ut neque.',
        pic: nature1
    }
    const project2: ProjectType={
        id: 1,
        name: 'Blabla',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a fringilla mi. Suspendisse ut neque.',
        pic: nature2
    }


    return (
        <div className={s.projectsBlock}>
            <div className={`${st.container} ${s.projectsContainer}`}>
                <h2 className={st.title}>My projects</h2>
                <div className={s.projects}>
                    <Project project={project1}/>
                    <Project project={project2}/>
                </div>
            </div>
        </div>
    );
};

export default Projects