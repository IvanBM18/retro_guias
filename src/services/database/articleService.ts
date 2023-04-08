import IArticle from "../../../models/typescriptModels/article";
import db from "./config/dbProvider";
import { collection, addDoc, FirestoreError, getDocs, doc, setDoc, updateDoc } from "firebase/firestore";

class ArticleService{
    static async postArticle(article : IArticle){
        console.log('Posting Article ...')
        await setDoc(doc(db,'articles',article.id.toString()),article)
        console.log(`Article wirtten with id: ${article.id.toString()}`);
    }

    static async updateArticle(article : IArticle){
        const articleRef = doc(db,'articles',article.id.toString())
        await setDoc(articleRef,article);
    }
}

export default ArticleService;