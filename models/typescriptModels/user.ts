export interface User extends UserCredentials{
    id:string,
    name: string,
    
}

export default interface UserCredentials{
    email:string,
    password:string,
}