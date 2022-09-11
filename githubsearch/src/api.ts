import axio from 'axios'

const BASE = 'https://api.github.com/users/';
let searchUser = 'will'
export const api = {
    searchUser: (e:string)=>{
        searchUser = e;
        console.log(e)
    },
    getUser: async (searchUser:any)=>{
        let response = await axio.get(`${BASE}${searchUser}`);
        return response.data;
    }
}


/*export const api = {
    getUser: async ()=>{
        let response = await fetch('https://api.github.com/users/willian');
        let json = await response.json();
        return json;
    }
}
*/