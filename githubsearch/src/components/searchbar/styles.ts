import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-grow: 1;
    padding: 1em;
`;

export const Input = styled.input`
    flex-grow: 5;
    height: 2em;
    outline: none;
    font-size: 1.3em;
    padding-left: 1em;
`;
export const SearchButton = styled.button`
    color: white;
    cursor: pointer;
    flex-grow: 1;
    background-color: blue;
    border: none;
    transition-duration: .5s;

    &:hover{
        color: black;
        background-color: white;
        border: 1px solid black;
    }
`;