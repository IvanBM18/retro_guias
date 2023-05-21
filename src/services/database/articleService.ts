import { FirebaseError } from "firebase/app";
import IArticle, { SignedArticle } from "../../models/article";
import db from "./config/dbProvider";
import { collection, addDoc, FirestoreError, getDocs, doc, setDoc, updateDoc, deleteDoc, QuerySnapshot, DocumentData, query, where } from "firebase/firestore";

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

    static async fectchByUser(userId : string){
        try{
            const q = query(collection(db,'articles'),where('createdBy','==',userId))
            const querySnapshot = await getDocs(q);
            const articles : IArticle[] = querySnapshot.docs.map((doc) => {
                return doc.data() as IArticle;
            });
            return articles;
        }catch (error : any){
        console.log(`[ERROR] while trying fetching by user: ${error.message}`)
        throw error;
        }
    }

    static async postArticle(article : IArticle, userId : string){
        let newArticle = {...article,createdBy:userId}
        console.log('Posting Article ...')
        await setDoc(doc(db,'articles',newArticle.toString()),article)
    }

    static async updateArticle(article : IArticle){
        const articleRef = doc(db,'articles',article.id.toString())
        await setDoc(articleRef,article);
    }

    static async deleteArticle(article : IArticle){
        console.log(`Deleting article with id: ${article.id}`)
        article.isDeleted = true;
        const articleRef = doc(db,'articles',article.id.toString())
        await setDoc(articleRef,article)
        .then(() =>{
            console.log('Article Eliminated!!')
        })
        .catch(() =>{
            console.error('[ERROR]: While eliminating the article')
        })
    }
}

export default ArticleService;