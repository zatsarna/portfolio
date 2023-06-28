import React from 'react';
import s from './Skills.module.css'
import st from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${st.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My skills</h2>
                <div className={s.skills}>
                   <Skill skill={'HTML/CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a fringilla mi. Suspendisse ut neque.'}/>
                   <Skill skill={'JavaScript'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a fringilla mi. Suspendisse ut neque.'}/>
                   <Skill skill={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a fringilla mi. Suspendisse ut neque.'}/>
                   <Skill skill={'Redux'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a fringilla mi. Suspendisse ut neque.'}/>
                   <Skill skill={'Git / Github'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a fringilla mi. Suspendisse ut neque.'}/>
                   <Skill skill={'TypeScript'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a fringilla mi. Suspendisse ut neque.'}/>
                </div>
            </div>
        </div>
    );
};

