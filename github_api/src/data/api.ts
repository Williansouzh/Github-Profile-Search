export const api = async (user:string)=>{
    const gitApiUrl:string = "https://api.github.com/users/"+user;
    let response = await fetch(gitApiUrl);
    let json = await response.json();
    console.log(json)
    return json;
} 