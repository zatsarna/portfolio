import React from 'react';
import s from './HireMe.module.css'
import st from '../common/styles/Container.module.css';

const HireMe = () => {

    return (
        <div className={s.hireMeBlock}>
            <div className={`${st.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>Looking for remote work</h2>
                <button className={s.button}>Hire me</button>

            </div>
        </div>
    );
};

export default HireMe