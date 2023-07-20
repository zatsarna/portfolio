import React from 'react';
import s from './Main.module.css'
import st from './../common/styles/Container.module.css'
import Button from '../common/button/Button';
import photo from './liuda.png'
export const Main = () => {
    return (
        <main className={s.main}>
            <div className={`${st.container} ${s.mainContainer}`}>
                <div className={s.textBlock}>
                    <span>Hello there...</span>
                    <h1>I'm Liudmyla Zatsarna.</h1>
                    <p>Front-end Developer</p>
                    <p>based in Columbus, Ohio.</p>
                    <Button name={'My work'} callback={()=>{}} className={s.myWorkButton}/>
                    <Button name={'Hire Me'} callback={()=>{}}/>
                </div>
                <div className={s.photoBlock}>
                    <img src={photo} alt={'autor'} className={s.photo}/>
                </div>
            </div>

        </main>
    );
};

