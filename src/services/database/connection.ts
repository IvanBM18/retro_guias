import mysql from 'mysql2';

const getConnection = (async () =>{
    const  dbConnection = mysql.createConnection({
        host: 'localhost',
        port:3306,
        user: 'root',
        password: '',
        database: 'test',
    });
    return await dbConnection
})

const db = getConnection();

export default db