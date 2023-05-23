import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
    
})


export const fetchData = async (req, res) => {

    db.query("SELECT * FROM tp", (error, result) => {
        if (error) {
            res.status(404).json({ message: error });
        } else {
            res.status(200).json(result);
        }
    })
}