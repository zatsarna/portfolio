import React from 'react';
import s from './Skills.module.css'
import st from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill';
import HtmlIcon from './icons/HtmlIcon';
import CssIcon from './icons/CssIcon';
import ReactIcon from './icons/ReactIcon';
import JavaScriptIcon from './icons/JavaScriptIcon';
import ReduxIcon from './icons/ReduxIcon';
import TypescriptIcon from './icons/TypescriptIcon';
import GitIcon from './icons/GitIcon';
import GithubIcon from './icons/GithubIcon';

export const Skills= () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${st.container} ${s.skillsContainer}`}>
                <h2 className={st.title}>My skills</h2>
                <div className={s.skills}>
                   <Skill skill={'HTML/CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a fringilla mi. Suspendisse ut neque.'} Icon={HtmlIcon} Icon2={CssIcon}/>
                    <Skill skill={'JavaScript'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a fringilla mi. Suspendisse ut neque.'} Icon={JavaScriptIcon} />
                    <Skill skill={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a fringilla mi. Suspendisse ut neque.'} Icon={ReactIcon} />
                    <Skill skill={'Redux'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a fringilla mi. Suspendisse ut neque.'} Icon={ReduxIcon} />
                    <Skill skill={'TypeScript'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a fringilla mi. Suspendisse ut neque.'} Icon={TypescriptIcon} />
                    <Skill skill={'Git/GitHub'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a fringilla mi. Suspendisse ut neque.'} Icon={GitIcon} Icon2={GithubIcon}/>

                </div>
            </div>
        </div>
    );
};

