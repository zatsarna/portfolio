import React from 'react';
import s from './Project.module.css';
import {ProjectType} from '../Projects';
import Button from '../../common/button/Button';

const Project = (props: {project: ProjectType}) => {
    return (
        <div className={s.project}>
            <div className={s.imgContainer}>
                <img src={props.project.pic} className={s.img} alt={'Project'}></img>
                <Button name={'Explore'} callback={()=>{}} className={s.button}/>
            </div>
            <h3 className={s.heading}>{props.project.name}</h3>
            <p className={s.description}>{props.project.description}</p>
        </div>
    );
};

export default Project;