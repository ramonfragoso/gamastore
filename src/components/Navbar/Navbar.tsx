import React from "react";
import './navbar.css'
import logo from '../../assets/logo.png'

export const Navbar: React.FC = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} height='100px' alt='logo'/>
            </div>
            <div className='content'>
                <input className='searchbar' maxLength={86} placeholder='Pesquisar. Ex.: Fones de ouvido, Cadeira Gamer, Mouse, etc...'/>
                <div className='options'>
                    <div>login</div>
                    <div>carrinho</div>
                </div>
            </div>
        </div>
    )
}