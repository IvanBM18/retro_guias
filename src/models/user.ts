export interface User {
    id?: string,
    isLoggedIn: boolean
    avatarUrl?: string 
    name: string
}
export default interface UserCredentials{
    email:string,
    password:string,
}