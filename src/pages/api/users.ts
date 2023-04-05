import db from "@/services/database/connection";
import { NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../models/typescriptModels/user";

export default async function handler(req:  NextApiRequest, res: NextApiResponse<User[] | { message: string }>) {
    switch (req.method) {
      case 'GET':
        (await db).execute('SELECT * FROM users', (error : any, results: User[], fields : any) => {
          if (error) throw error;
          res.status(200).json(results);
        });
        break;
      case 'POST':
        // Handle POST request to create a new user
        const user : User = req.body;
        console.log(user);
        (await db).query('INSERT INTO users (id,name) VALUES (?,?)',[user.id,user.name], 
          (error,response) => {
            if(error) throw error
            res.status(201).json({ message: 'User created succesfully!'})
          })
        break;
      default:
        res.status(405).end(); // Method Not Allowed
    }
  }