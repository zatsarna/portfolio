import React from 'react';
import st from './Button.module.css'
type ButtonPropsType={
    name: string,
    callback: ()=>void
    className?: string
}
const Button = (props: ButtonPropsType) => {
    return (
        <button className={`${st.buttonMain} ${props.className}`} onClick={props.callback}>{props.name}</button>
    );
};

export default Button;