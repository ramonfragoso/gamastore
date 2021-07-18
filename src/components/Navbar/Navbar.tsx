import React from "react";
import './styles.ts'
import logo from '../../assets/logo.png'
import { FaRegUserCircle, FaShoppingCart } from 'react-icons/fa';
import { NavbarButton } from "./components";
import { Content, Logo, Container, Options, Option, Searchbar } from './styles'

export const Navbar: React.FC = () => {
    return (
        <Container>
            <Logo>
                <img src={logo} height='100px' alt='logo'/>
            </Logo>
            <Content>
                <Searchbar maxLength={86} placeholder='Pesquisar. Ex.: Fones de ouvido, Cadeira Gamer, Mouse, etc...'/>
                <Options>
                    <Option>
                        <NavbarButton label='Carrinho' icon={<FaShoppingCart/>}/>
                    </Option>
                    <Option>
                        <NavbarButton label='Login' icon={<FaRegUserCircle/>}/>
                    </Option>
                </Options>
            </Content>
        </Container>
    )
}