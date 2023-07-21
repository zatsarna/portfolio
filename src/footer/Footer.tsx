import React from 'react';
import s from './Footer.module.css'
import st from '../common/styles/Container.module.css';

import LinkedinIcon from './icons/LinkedinIcon';
import GithubIcon from './icons/GithubIcon';
import EmailIcon from './icons/EmailIcon';
import TwitterIcon from './icons/TwitterIcon';





const Footer = () => {
    return (
        <footer className={s.footerBlock}>
            <div className={`${st.container} ${s.footerContainer}`}>
                <h2 className={st.title}>My socials</h2>
                <div className={s.socials}>
                    <div className={s.socialsItem}>
                        <a href="https://www.linkedin.com/in/zatsarna/" className={s.icon} target={'_blank'}>
                            <LinkedinIcon/>
                        </a>

                    </div>
                    <div className={s.socialsItem}>
                        <a href="https://github.com/zatsarna" className={s.icon} target={'_blank'}>
                            <GithubIcon/>
                        </a>
                    </div>
                    <div className={s.socialsItem}>
                        <a href='mailto: lyudazats@gmail.com' className={s.icon} target={'_blank'}>
                            <EmailIcon/>
                        </a>

                    </div>
                    <div className={s.socialsItem}>
                        <a href='#' className={s.icon} target={'_blank'}>
                        <TwitterIcon/>
                    </a>

                    </div>

                </div>
                <p className={s.copyrightText}> &copy; Liudmyla Zatsarna</p>
            </div>
        </footer>
    );
};

export default Footer;