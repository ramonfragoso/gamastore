import styled from "styled-components";

export const Container = styled.button`
    padding: 11px 25px;
    background-color: #8C52E5;
    border: none;
    border-radius: 30px;
    color: white;
    font-size: medium;
    letter-spacing: 1px;
    transition: ease-in-out .2s;
    cursor: pointer;

    :hover {
        box-shadow: 0px 0px 9px 5px rgba(75,17,129,1);
        transform: scale(1.05, 1.05);
    }
`