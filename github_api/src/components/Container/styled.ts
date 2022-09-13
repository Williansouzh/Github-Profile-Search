import styled from 'styled-components'

export const Container = styled.div`
    max-width: 920px;
    margin:  0 auto;
    .Informations_Container{
        display: flex;
        align-items: center;
        padding: 2em;
    }
    figure{
        margin: 0 2em 0 0;
        max-width: 200px;
    }
    img{
        width: 100%;
        border-radius: 50%;
    }
    #notFound{
        text-align: center;
    }
    @media (max-width: 500px) {
        .Informations_Container{
            flex-direction: column;
        }
    }
`;
export const Informations = styled.div`
    flex-grow: 1;

    .folowers-Conatiner{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }
    .folowers{
        color: white;
        cursor: pointer;
        width: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #446FF2;
        padding: 10px;
        transition-duration: .3s;
        border: 1px solid #446FF2;
    }
    .folowers:hover{
        background-color: whitesmoke;
        border: 1px solid #447EF2;
        color: black;
    }
    .folowers p{
        margin: 0%;
        text-align: center;
    }
    @media (max-width: 500px){
        text-align: center;
        .folowers-Conatiner{
            width: 80%;
        }
        figure {
        }
    }
`