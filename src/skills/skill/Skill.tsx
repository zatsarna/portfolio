import React from 'react';
import s from './Skill.module.css'

export const Skill = (props: { skill: string, description: string }) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3 className={s.heading}>{props.skill}</h3>
            <p className={s.description}>{props.description}</p>
        </div>
    );
};

