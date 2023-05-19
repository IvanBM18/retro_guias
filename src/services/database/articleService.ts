import { FirebaseError } from "firebase/app";
import IArticle from "../../models/article";
import db from "./config/dbProvider";
import { collection, addDoc, FirestoreError, getDocs, doc, setDoc, updateDoc, deleteDoc, QuerySnapshot, DocumentData } from "firebase/firestore";

class ArticleService{
    static articleList: IArticle[] = [];
    static async fetchAll() {
        try{
            this.articleList = []
            // console.log('Fetching for articles . . .')
            const query = await getDocs(collection(db,'articles'));
            query.forEach((article) => {
                if(!this.articleList.includes(article.data() as IArticle))
                    this.articleList.push(article.data() as IArticle)
            })
        }catch(error){
            console.error(`[ERROR] ${error}`)
        }
        
    }

    static async postArticle(article : IArticle){
        console.log('Posting Article ...')
        await setDoc(doc(db,'articles',article.id.toString()),article)
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