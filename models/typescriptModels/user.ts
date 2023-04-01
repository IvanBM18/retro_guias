export interface fullUser extends IUser{
    id:number,
    name: string,
    
}

export default interface IUser{
    email:string,
    password:string,
}