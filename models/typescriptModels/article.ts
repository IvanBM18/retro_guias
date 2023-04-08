import UserCredentials from "./user";

export default interface IArticle{
    id:number,
    title:string,
    description:string,
    createdAt: string,
}

export interface ISignedArticle extends IArticle{
    createdByUser : UserCredentials
}
// type article = {
//     id: number;
//     title: string;
//     description: string;
//     date: string;
//   };