import UserCredentials from "./user";

export default interface IArticle{
    id:number,
    title:string,
    description:string,
    createdBy: string,
    image: string,
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