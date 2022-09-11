import * as C from './styles'
import {useState, useEffect} from 'react'
import {api} from  '../../api'
export const SearchBar = ({userName}: any)=>{

    const [userSearch, setUserSearch] = useState('') 
    useEffect(()=>{
        api.searchUser(userSearch);
        userName = userSearch;
    }, [userSearch])

    //functions 
    const handleClick = (e:any)=>{
        console.log(userSearch)
    }
    return(
        <C.Container>
            <C.Input type="text" onChange={(e)=>{
                setUserSearch(e.target.value)
            }}/>
            <C.SearchButton onClick={handleClick} >Search</C.SearchButton>
        </C.Container>
    )
};