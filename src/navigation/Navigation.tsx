import React from 'react';
import s from './Navigation.module.css'

export const Navigation = (props: {navActive: boolean}) => {
    console.log(props.navActive)
    return (
        <nav className={`${s.nav} `}>
            <ul className={`${s.navList} ${props.navActive ? 'active' : ''}`}>
               <li className={s.listItem}> <a href={'#'}>Home</a></li>
               <li className={s.listItem}> <a href={'#'}>About me</a></li>
               <li className={s.listItem}> <a href={'#'}>Skills</a></li>
               <li className={s.listItem}> <a href={'#'}>Portfolio</a></li>
               <li className={s.listItem}> <a href={'#'}>Contacts</a></li>

            </ul>
            
        </nav>
    );
};

