import IUser from "./user";

export default interface IArticle{
    id:number,
    title:string,
    description:string,
    createdAt: Date,
}

export interface ISignedArticle extends IArticle{
    createdByUser : IUser
}