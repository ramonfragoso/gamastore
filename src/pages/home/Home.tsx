import React from 'react'
import { Content, Navbar } from '../../components'
import { StyledHome } from './styles'

export const Home: React.FC  = () => {
    return (
        <StyledHome>
            <Navbar/>
            <Content/>
        </StyledHome>
    )
}