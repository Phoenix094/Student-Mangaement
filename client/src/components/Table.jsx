import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

import { deleteData } from '../api/index.js';



const Table = () => {

    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5001/data").then((res) => {
            setData(res.data);

        }).catch((error) => {
            console.log(error)
        });
    }, [data])

    const handleEdit = (ele) => {
        navigate(`/edit/id=${ele.id}`)
    }

    const handleDelete = (id) => {
        deleteData(id);
    }

    return (
        <div className='pt-3'>
            <table className="table table-bordered rounded rounded-2">
                <thead>
                    <tr>
                        <th scope='col'>Sr.No.</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Contact Number</th>
                        <th scope="col">Course </th>
                        <th scope="col">Address</th>
                        <th scope="col"> </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((ele, index) => {
                            return (
                                <tr key={ele.id}>
                                    <td>{index + 1}</td>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.course}</td>
                                    <td>{ele.phone}</td>
                                    <td>{ele.address}</td>
                                    <td><Button variant='primary' className='px-3 mx-2' onClick={() => handleEdit(ele)}> <i className='fa fa-edit'></i> </Button>
                                        <Button variant='danger' className='px-3 mx-2' onClick={() => handleDelete(ele.id)}> <i className='fa fa-trash'></i> </Button></td>
                                </tr>)
                        })
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Table
