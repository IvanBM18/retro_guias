import {User} from "./user";

export default interface IArticle{
    id:number,
    title:string,
    description:string,
    createdAt: string,
    image?: string,
    isDeleted: boolean,
    createdBy?: string
    userid?: string
}

export interface SignedArticle extends IArticle{
    user : User
}
// type article = {
//     id: number;
//     title: string;
//     description: string;
//     date: string;
//   };