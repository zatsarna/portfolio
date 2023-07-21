import React, {useState} from 'react';
import s from './Header.module.css'
import {Navigation} from '../navigation/Navigation';

export const Header = () => {
    const [navActive, setNavActive] = useState(false);
    function toggleNav() {
        setNavActive(!navActive);

    }

    return (
        <header className={s.header}>
            <div className={`${s.burgerIcon} ${navActive ? 'active' : ''}`} onClick={toggleNav}>
                <div className={s.burgerLine}></div>
                <div className={s.burgerLine}></div>
                <div className={s.burgerLine}></div>
            </div>
            <Navigation navActive={navActive}/>
        </header>
    );
};

