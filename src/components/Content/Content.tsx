import React, { useState } from 'react'
import { Button } from '../Button'
import { LeftColumn, RightColumn, Subtitle, Title, StyledContent, Message, EmailField, Tip, Discount, Images, Image, Form, Tile, Percentage } from './styles'
import teclado from '../../assets/teclado.png'
import cadeira from '../../assets/cadeira.png'
import headphone from '../../assets/headphone.png'
import { useMemo } from 'react'

export const Content: React.FC  = () => {

    const [currentPromotion, setCurrentPromotion] = useState('')

    const images = useMemo(() => {
        return [
            {name: 'teclado', src:teclado, delay: 0, discount: '80%', showPromotion: currentPromotion === 'teclado' },
            {name: 'headphone', src:headphone, delay: 1000, discount: '50%', showPromotion: currentPromotion === 'headphone'},
            {name: 'cadeira', src:cadeira, delay: 2000, discount: '95%', showPromotion: currentPromotion === 'cadeira'}
        ]
    },[currentPromotion])

    const setPromotion = (promotionName: string) => {
        setCurrentPromotion(promotionName)
    }

    const onSubmit = (event: any) => {
        event.preventDefault()
        localStorage.setItem('email', event.target.email.value)
    }

    

    return (
        <StyledContent>
            <LeftColumn>
                <Title>BLACK FRIDAY</Title>
                <Subtitle>É NA GAMA STORE</Subtitle>
                <Message>PROMOÇÕES COM ATÉ <Percentage>&nbsp;90%&nbsp;</Percentage> DE DESCONTO PARA VOCÊ<br/> TURBINAR SEU HOME-OFFICE</Message>
            </LeftColumn>
            <RightColumn>
                <Images>
                    {images.map(image => (
                        <div onMouseEnter={() => setPromotion(image.name)} onMouseLeave={() => setPromotion('')}>
                            <Image src={image.src} width={250} delay={image.delay} alt='image'/>
                            {image.showPromotion && <Tile show={image.showPromotion} className={'animate__animated animate__fadeIn'}><Discount>{image.discount} OFF</Discount></Tile>}
                        </div>
                    ))}
                </Images>
                <Form onSubmit={onSubmit}>
                    <Tip>Cadastre seu e-mail para ficar por dentro de todas as ofertas!</Tip>
                    <EmailField type='email' name='email' placeholder='Digite seu e-mail'/>
                    <Button type='submit'>Ficar por dentro!</Button>
                </Form>
            </RightColumn>
        </StyledContent>
    )
}