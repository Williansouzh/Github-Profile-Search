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
            { user.id && 
                <div className="Informations_Container">
                <figure>
                    <img src={user.avatar_url} alt="avatar img" />
                </figure>
                <C.Informations>
                    <h3>{user.name}</h3>
                    <div className="folowers-Conatiner">
                        <div className="folowers">
                            <p>Folowers</p>
                            <span>{user.followers}</span>
                        </div>
                        <div className="folowers">
                            <p>Folowing</p>
                            <span>{user.following}</span>
                        </div>
                        <div className="folowers">
                            <p>Repositories</p>
                            <span>{user.public_repos}</span>
                        </div>
                    </div>
                    <div className="bio">
                        <h3>Biografia</h3>
                        <p> {user.bio}</p>
                    </div>
                    {user.company != null && 
                        <div>
                            <h3>Company: <span>{user.company}</span></h3>
                        </div>
                    }
                </C.Informations>
            </div>
            }
            {!user.id   &&
                <h1 id="notFound">Usuário não encontrado</h1>
            }
        </C.Container>
    );
}