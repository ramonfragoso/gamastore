import styled from 'styled-components'

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    padding: 20px;
    background-color: transparent;
    color: white;
    border: none;
    justify-content: space-between;
    font-size: 18px;
    transition: ease-in-out .3s;
    cursor: pointer;
    border-radius: 8px;
    :hover {
        background-color: #4B1181;
    }
`

export const Icon = styled.div`
    margin-right: 10px;
`