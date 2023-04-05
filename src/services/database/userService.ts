import connection from "./connection";
import mysql from 'mysql2/promise';
import { User } from "../../../models/typescriptModels/user";

class UserService{

    static async inserUser(user:User){
        const dbConnection = await mysql.createConnection({
            host: 'localhost',
            port:3306,
            user: 'root',
            password: '',
            database: 'test',
        });
        await dbConnection.execute(
            'INSERT INTO users (id,name) VALUES (?,?)',
            [user.id,user.name]
        )
        dbConnection.end();
    }
}

export default UserService;
