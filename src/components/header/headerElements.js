import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width:100%;
    background-color: #0061FE;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const  Header = styled.div`
    width: 100%;
    margin: 0px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoEmpresa = styled.h1`
    padding: 10px 0px;
    font-size: 2.8em;
    color: white;
`
export const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const MenuItem = styled.a`
    font-size: 1.2em;
    padding: 4px 8px;
    color: white;
    display: inline-block;
`