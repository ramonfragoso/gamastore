import React from 'react'
import { Container } from './styles'

type ButtonProps = {
    type: string
}

export const Button: React.FC<ButtonProps>  = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
}