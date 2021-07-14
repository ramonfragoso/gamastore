import React from "react";
import './navbarbutton.css';

type NavbarButtonProps = {
    label: string,
    icon: JSX.Element
}

export const NavbarButton: React.FC<NavbarButtonProps> = ({icon, label}) => {
    return (
        <button className='button'>
            <div className='icon'>{icon}</div>
            <div className='label'>{label}</div>
        </button>
    )
}