import React from 'react';
import s from './Footer.module.css'
import st from '../common/styles/Container.module.css';
import LinkedIn from '@mui/icons-material/LinkedIn';
import {Email, GitHub, Twitter} from '@mui/icons-material';





const Footer = () => {
    return (
        <footer className={s.footerBlock}>
            <div className={`${st.container} ${s.footerContainer}`}>
                <h2 className={s.title}>My socials</h2>
                <div className={s.socials}>
                    <div className={s.socialsItem}>
                        <a href="https://www.linkedin.com/in/zatsarna/" className={s.icon}>
                            <LinkedIn  fontSize={'large'}/>
                        </a>
                    </div>
                    <div className={s.socialsItem}>
                        <a href="https://github.com/zatsarna" className={s.icon} target={'_blank'}>
                            <GitHub  fontSize={'large'} />
                        </a>
                    </div>
                    <div className={s.socialsItem}>
                        <a href='mailto: lyudazats@gmail.com' className={s.icon}>
                            <Email  fontSize={'large'}/>
                        </a>

                    </div>
                    <div className={s.socialsItem}>
                        <a href='#' className={s.icon}>
                        <Twitter  fontSize={'large'}/>
                    </a>

                    </div>

                </div>
                <p className={s.copyrightText}> &copy; Liudmyla Zatsarna</p>
            </div>
        </footer>
    );
};

export default Footer;