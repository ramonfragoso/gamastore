import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: rgb(75,17,129);
    background: linear-gradient(180deg, rgba(75,17,129,0.2) 0%, transparent 100%);
`

export const Searchbar = styled.input`
    padding: 20px;
    border-radius: 8px;
    background-color: #4b1181;
    border: none;
    color: white;
    font-size: medium;
    font-weight: 800;
    width: 100%;
    :focus{
        color: white;
        font-weight: 800;
        font-size: medium;
        outline: none;
    }
`

export const Logo = styled.div`
    padding-top: 30px;
    padding-bottom: 10px;
    width: 100%;
`


export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 100%;
    width: 100%;
`

export const Options = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-right: 100px;
`

export const Option = styled.div`
    margin-left: 50px;
`