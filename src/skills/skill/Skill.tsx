import React from 'react';
import s from './Skill.module.css'

type SkillPropsType={
    skill: string, description: string, Icon: React.ElementType, Icon2?: React.ElementType
}
export const Skill: React.FC<SkillPropsType>= ({Icon, skill, description, Icon2}) => {

    return (
        <div className={s.skill}>
            <div className={s.iconContainer}>
                <Icon/>
                {Icon2 && <Icon2/>}
            </div>
            <h3 className={s.heading}>{skill}</h3>
            <p className={s.description}>{description}</p>
        </div>
    );
};

