import express from 'express';
import mysql from 'mysql';

import { fetchData } from '../controllers/fetchData.js';
import { addData, editData, updateData, deleteData } from '../controllers/addData.js';

const router = express.Router();


const db = mysql.createConnection({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD
})
router.get('/data', fetchData);
router.post('/addData', addData);
router.get('/edit/id=:id', editData);
router.patch('/edit/id=:id', updateData);
router.delete('/data/:id', deleteData);


export default router;