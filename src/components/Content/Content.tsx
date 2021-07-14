import React from 'react'
import { Button } from '../Button'
import { LeftColumn, RightColumn, Subtitle, Title, StyledContent, Message, EmailField, Tip } from './styles'

export const Content: React.FC  = () => {
    return (
        <StyledContent>
            <LeftColumn>
                <Title>BLACK FRIDAY</Title>
                <Subtitle>É NA GAMA STORE</Subtitle>
                <Message>Promoções com até 90% de desconto pra você turbinar seu home-office</Message>
            </LeftColumn>

            <RightColumn>
                <Tip >Cadastre seu e-mail para ficar por dentro de todas as ofertas!</Tip>
                <EmailField placeholder='Digite seu e-mail'/>
                <Button>Ficar por dentro!</Button>
            </RightColumn>
        </StyledContent>
    )
}