import React from 'react';
import s from './Contacts.module.css'
import st from '../common/styles/Container.module.css';

const Contacts = () => {

    return (
        <div className={s.hireMeBlock}>
            <div className={`${st.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>Looking for remote work</h2>
                <form action="" method="get" className="form-example">
                    <div className="form-example">
                        <label htmlFor="name">Enter your name: </label>
                        <input type="text" name="name" id="name" required/>
                    </div>
                    <div className="form-example">
                        <label htmlFor="email">Enter your email: </label>
                        <input type="email" name="email" id="email" required/>
                    </div>
                    <div className="form-example">
                        <input type="submit" value="Subscribe!" className={s.button}/>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default Contacts