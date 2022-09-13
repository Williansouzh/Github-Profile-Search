import * as C from './styles'
import {useState, useEffect, ChangeEvent} from 'react';

import {usernameType} from '../../types/userName'
import { FaSistrix } from "react-icons/fa";

import {api} from '../../data/api'

type Props = {
    clickFunction: (userName: any)=> void
}

export const SearchBar = ({clickFunction}: Props)=>{

    const [userName, setUserName] = useState<any>()

    //functions 
    const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>)=>{
        setUserName(e.target.value)
    }
    
    const handleClick = (e:any)=>{
        clickFunction(userName)
    }

    return(
        <C.Container>
            <input 
                type="text" 
                placeholder='Digit the username' 
                value={userName}
                onChange={handleChangeUsername}
            />
            <button onClick={handleClick} ><FaSistrix fontSize={20}/></button>
        </C.Container>
    )
}