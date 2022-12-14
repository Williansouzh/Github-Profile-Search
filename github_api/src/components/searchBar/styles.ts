import styled from 'styled-components'

export const Container  = styled.div`
    display: flex;
    flex-grow: 1;
    height: 2em;
    padding: 1em;

    input[type="text"]{
        flex-grow: 4;
        outline: none;
    }
    button{
        cursor: pointer;
        flex-grow: 1;
        background-color: #447EF2;
        border: none;
        transition:  .5s;
        &:hover{
            background-color: #2E4BF2;
        }
    }
`; 
