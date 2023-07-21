import React from 'react';
import s from './Contacts.module.css'
import st from '../common/styles/Container.module.css';
import Button from '../common/button/Button';

const Contacts = () => {

    return (
        <div className={s.contactsBlock}>
            <div className={`${st.container} ${s.contactsContainer}`}>
                <h2 className={st.title}>Contacts</h2>
                <form action="" method="get" className={s.form}>
                    <div className={s.formElement}>
                        <label htmlFor="name">Name: </label>
                        <input type="text" name="name" id="name" required className={s.contactsInput} />
                    </div>
                    <div className={s.formElement}>
                        <label htmlFor="phone">Phone: </label>
                        <input type="tel" name="phone" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required className={s.contactsInput}/>
                    </div>
                    <div className={s.formElement}>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" required className={s.contactsInput}/>
                    </div>
                    <div className={s.formElement}>
                        <label htmlFor="email">Enter your message: </label>
                        <textarea  name="email" id="message" required className={s.contactsInput} rows={8}></textarea>
                    </div>
                    <div className={s.formElement}>
                        <Button name={'Submit'} callback={()=>{}}/>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default Contacts