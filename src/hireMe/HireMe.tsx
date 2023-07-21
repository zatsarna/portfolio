import React from 'react';
import s from './HireMe.module.css'
import st from '../common/styles/Container.module.css';
import Button from '../common/button/Button';

const HireMe = () => {

    return (
        <div className={s.hireMeBlock}>
            <div className={`${st.container} ${s.projectsContainer}`}>
                <h2 className={st.title}>Looking for remote work</h2>
                <Button name={'Hire me'} callback={() => {
                }}/>
            </div>
        </div>
    );
};

export default HireMe