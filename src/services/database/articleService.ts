import IArticle from "../../../models/typescriptModels/article";
import db from "./config/dbProvider";
import { collection, addDoc, FirestoreError, getDocs, doc, setDoc, updateDoc, deleteDoc, QuerySnapshot, DocumentData } from "firebase/firestore";

class ArticleService{

    static articleList: IArticle[] = [];

    static async fetchAll() {
        console.log('Fetching for articles . . .')
        const query = await getDocs(collection(db,'articles'));
        query.forEach((art) => {
            if(!this.articleList.includes(art.data() as IArticle))
                this.articleList.push(art.data() as IArticle)
        })
    }

    static async postArticle(article : IArticle){
        console.log('Posting Article ...')
        await setDoc(doc(db,'articles',article.id.toString()),article)
        console.log(`Article wirtten with id: ${article.id.toString()}`);
    }

    static async updateArticle(article : IArticle){
        const articleRef = doc(db,'articles',article.id.toString())
        await setDoc(articleRef,article);
    }

    static async deleteArticle(article : IArticle){
        console.log(`Deleting article with id: ${article.id}`)
        const articleRef = doc(db,'articles',article.id.toString())
        await deleteDoc(articleRef)
        .then(() =>{
            console.log('Article Eliminated!!')
        })
        .catch(() =>{
            console.error('[ERROR]: While eliminating the article')
        })
    }
}

export default ArticleService;