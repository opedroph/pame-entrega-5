import styled from "styled-components";

export const FormularioContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TituloFormulario = styled.h2`
    margin:10px 30px ;
    font-size: 2.5em;
    color: black;
`
export const FormSpace = styled.form`
    display: flex;
    flex-direction: column;
    margin: 10px 30px;
    gap: 15px;
`

export const Input= styled.input`
    width: 100%;
    padding: 10px;
    outline: none;
    &:focus{
        background-color:#d3d3d3;
    }
    
`

export const Label = styled.label`
    font-size: 1em;
    color: white;
`



export const Button = styled.button`
    margin: 10px 0px;
    font-size:1.0em ;
    padding: 10px 20px;
    background-color: black;
    color: white;
    cursor: pointer;
` 
