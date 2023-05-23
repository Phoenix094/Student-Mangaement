import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
})



export const addData = async (req, res) => {
    const { name, email, phone, course, address } = req.body;


    try {

        db.query('INSERT INTO tp (name, email, phone, course, address) VALUES (? ,?, ?,?,? )', [name, email, phone, course, address], (err, result) => {
            if (err) {
                res.status(400).json({ message: err })
            } else {
                res.status(200).json({ message: "Data Recorded" })
            }
        })


    } catch (error) {
        res.status(404).json({ message: error })
    }
}

export const editData = async (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM tp WHERE id=?", [id], (err, result) => {
        if (err) {
            res.status(404).json({ message: err })
        } else {
            res.status(200).json(result);
        }
    });
}

export const updateData = (req, res) => {
    const { name, email, phone, course, address } = req.body;
    const { id } = req.params;

    try {
        db.query("UPDATE tp SET name=?, email=?, phone=?, course=?, address=? WHERE id=?", [name, email, phone, course, address, id], (err, result) => {
            if (err) {
                res.status(400).json({ message: err });
            } else {
                res.status(200).json({ message: "record updated" })
            }
        })
    } catch (error) {
        res.status(402).json({ message: error });
    }
}

export const deleteData = (req, res) => {
    const { id } = req.params;

    try {
        db.query(`DELETE FROM tp WHERE id=?`, [id], (err, result) => {

            if (err) {
                res.status(400).json({ message: err });
            } else {
                res.status(200).json(result)
            }
        })
    } catch (error) {
        res.status(403).json({ message: error })
    }
}