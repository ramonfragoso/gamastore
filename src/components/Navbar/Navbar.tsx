import React from "react";
import './navbar.css'
import logo from '../../assets/logo.png'
import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
import { NavbarButton } from "./components";

export const Navbar: React.FC = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={logo} height='100px' alt='logo'/>
            </div>
            <div className='content'>
                <input className='searchbar' maxLength={86} placeholder='Pesquisar. Ex.: Fones de ouvido, Cadeira Gamer, Mouse, etc...'/>
                <div className='options'>
                    <div className='option'>
                        <NavbarButton label='Carrinho' icon={<FaShoppingCart/>}/>
                    </div>
                    <div className='option'>
                        <NavbarButton label='Login' icon={<FaRegUserCircle/>}/>
                    </div>
                </div>
            </div>
        </div>
    )
}