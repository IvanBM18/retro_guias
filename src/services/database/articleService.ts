import { FirebaseError } from "firebase/app";
import IArticle, { SignedArticle } from "../../models/article";
import db from "./config/dbProvider";
import { collection, addDoc, FirestoreError, getDocs, doc, setDoc, updateDoc, deleteDoc, QuerySnapshot, DocumentData, query, where } from "firebase/firestore";

class ArticleService{
    static articleList: IArticle[] = [];

    static async fetchAll() : Promise<IArticle[]> {
        try{
            this.articleList = []
            // console.log('Fetching for articles . . .')
            const query = await getDocs(collection(db,'articles'));
            query.forEach((doc) => {
                if(!this.articleList.includes(doc.data() as IArticle) && !doc.data().isDeleted)
                    this.articleList.push(doc.data() as IArticle)
            })
            
        }catch(error){
            console.error(`[ERROR] ${error}`)
        }
            return this.articleList;
    }

    static async fectchByUser(userId : string){
        try{
            const q = query(collection(db,'articles'),where('userid','==',userId))
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

    static async postArticle(article : IArticle){
        let newArticle = {...article}
        console.log('Posting Article ...')
        await setDoc(doc(db,'articles',newArticle.id.toString()),article)
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