import styled, { keyframes } from "styled-components";

export const StyledContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 80%;
    `

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    `

export const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 75%;
    width: 80%;
`

export const Title = styled.div`
    font-family: 'Oswald', sans-serif;
    color:#30CC47;
    font-weight: 900;
    font-size: 130px;
    margin-bottom: 30px;
    text-shadow:
    0 0 1px rgba(48, 204, 71, .6),
    0 0 10px rgba(48, 204, 71, .6),
    0 0 10px rgba(48, 204, 71, .6);
    user-select: none;
`

export const Subtitle = styled.div`
    background-color: #8C52E5;
    color: white;
    padding: 15px;
    font-size: 25px;
    font-weight: 700;
    transition: ease-in-out .3s;
    cursor: pointer;
    user-select: none;
    margin-bottom: 50px;
    box-shadow: -10px 10px 0px 3px black;
    width: fit-content;

    :hover {
        transform: translate(10px, -10px);
        box-shadow: -20px 20px 0px 3px black;
    }
`

export const Message = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Lato', sans-serif;
    font-size: 40px;
    width: auto;
    font-style: italic;
    font-weight: 300;

    `
export const Percentage = styled.div`
    font-family: 'Kaushan Script', cursive;
    font-size: 70px;
    color: gold;
`

export const Discount = styled.div`
    font-family: 'Lato', sans-serif;
    font-style: italic;
    font-size: 40px;
`

interface TileProps {
    show: boolean
}

export const Tile = styled.div<TileProps>`
    width: fit-content;
    display: ${(props) => props.show ? 'flex' : 'none'};
    background-color: #F73D2C;
    box-shadow: -5px 5px 0px 1px white;
`

export const Images = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const floating = keyframes`
    from { transform: translate(0,  0px); }
    50%  { transform: translate(0, -30px); }
    to   { transform: translate(0, -0px); }    
`

interface ImageProps {
    delay: number
}

export const Image = styled.img<ImageProps>`	
    cursor: pointer;
    animation-name: ${floating};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-delay: ${(props) => props.delay }ms;
    margin-left: 30px;
    margin-top: 5px;

    :hover {
        animation-name: none;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Tip = styled.div`
    font-size: 20px;
    width: auto;
    margin-bottom: 30px;
    color: #909090
`

export const EmailField = styled.input`
    font-family: 'Lato', sans-serif;
    width: 80%;
    background-color: transparent;
    border-color: #30CC47; 
    border-radius: 35px;
    padding: 20px;
    color: white;
    text-align: center;
    outline: none;
    color: white;
    font-size: medium;
    outline: none;
    margin-bottom: 25px;

    :focus {
        outline: none;
    }
`