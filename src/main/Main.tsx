import React from 'react';
import s from './Main.module.css'
import st from './../common/styles/Container.module.css'
export const Main = () => {
    return (
        <main className={s.main}>
            <div className={`${st.container} ${s.mainContainer}`}>
                <div className={s.textBlock}>
                    <span>Hello there...</span>
                    <h1>I'm Liudmyla Zatsarna.</h1>
                    <p>Front-end Developer</p>
                    <span>based in Columbus, Ohio.</span>
                    <button>My work</button>
                    <button>Hire Me</button>
                </div>
                <div className={s.photoBlock}>
                    photo
                </div>
            </div>

        </main>
    );
};

