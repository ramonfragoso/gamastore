import styled from "styled-components";

export const StyledContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70%;
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
    width: 80%;
`

export const Title = styled.div`
    color:#30CC47;
    font-weight: 900;
    font-size: 110px;
    margin-bottom: 30px;
    text-shadow:
    0 0 1px rgba(48, 204, 71, .7),
    0 0 10px rgba(48, 204, 71, .7),
    0 0 10px rgba(48, 204, 71, .7);
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
    font-size: 20px;
    width: auto;
`

export const Tip = styled.div`
    font-size: 20px;
    width: auto;
    margin-bottom: 30px;
    color: #909090
`

export const EmailField = styled.input`
    width: 50%;
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