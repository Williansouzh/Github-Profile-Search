import * as C from './styled'
import {useState } from 'react';

import { SearchBar } from '../searchBar'
import {api} from '../../data/api'
export const Container = ()=>{
    const [user, setUser] = useState<any>("")
    //functions 
    const SearchEvent = async (userName: string)=>{
        setUser( await api(userName) )
    };
    return(
        <C.Container>
            <SearchBar clickFunction={SearchEvent} />
            <p>{user.name}</p>
        </C.Container>
    );
}