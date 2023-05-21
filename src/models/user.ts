export interface User {
    id?: string,
    isLoggedIn: boolean
    avatarUrl?: string 
    name: string
    email: string
    isVerified?: boolean
}
export default interface UserCredentials{
    email:string,
    password:string,
}