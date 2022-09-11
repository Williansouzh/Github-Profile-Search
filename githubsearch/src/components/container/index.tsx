import * as C from './styles';
import {api} from '../../api';
import {useState, useEffect} from 'react'
import {User} from '../../types/types' 

import {SearchBar} from '../searchbar/';
export const Container = ()=>{
    const [user, setUser] = useState<User>()

    const loadUser = async ()=>{
      let json = await api.getUser();
      setUser(json);
      console.log(json);
    }
    useEffect(()=>{
      loadUser()
    }, [user])
    return(
        <>
            <SearchBar userName={}/>
            <C.Container>
                <C.ProfilePhotoContainer>
                    <C.ProfilePhtoImg src={user?.avatar_url} />
                    <C.PersonalInformation>
                        <C.Name> {user?.name} </C.Name>
                        <C.folowers>Folowers <div>{user?.followers}</div></C.folowers>
                        <C.folowers>Folowing <div>{user?.following}</div></C.folowers>
                    </C.PersonalInformation>
                        <C.information>Company: {user?.company}</C.information>
                        <C.information>Email: {user?.blog}</C.information>
                </C.ProfilePhotoContainer>
            </C.Container>
        </>
    )
}