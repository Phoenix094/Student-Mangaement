import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

import { updateData } from '../api/index.js'


const initialData = { name: '', email: '', phone: '', course: '', address: '' }
const EditForm = () => {

    const [formData, setFormData] = useState([]);
    const { id } = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5001/edit/${id}`).then((res) => {
            // console.log(res.data);
            setFormData(res.data[0]);
            // console.log(formData);
        })
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        updateData(formData, id);
        setFormData('')
        navigate('/data');
    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleClear = () => {
        setFormData(initialData);
    }

    return (
        <div className='container col-6 shadow-lg rounded-5'>
            <h1 className='text-center my-5 pt-4'>Create Data</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-floating my-4">
                    <input type="text" className='form-control' name='name' id='name' placeholder='Name' value={formData.name} onChange={handleChange} />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating my-4">
                    <input type="email" className='form-control' name='email' id='email' placeholder='email' value={formData.email} onChange={handleChange} />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating my-4">
                    <input type="text" className='form-control' name='course' id='course' placeholder='Course' value={formData.course} onChange={handleChange} />
                    <label htmlFor="name">Course</label>
                </div>
                <div className="form-floating my-4">
                    <input type="text" className='form-control' name='address' id='address' placeholder='Address' value={formData.address} onChange={handleChange} />
                    <label htmlFor="name">Address</label>
                </div>
                <div className="form-floating my-4">
                    <input type="text" className='form-control' name='phone' id='phone' placeholder='phone' value={formData.phone} onChange={handleChange} />
                    <label htmlFor="phone">Contact Number</label>
                </div>
                <div className="d-flex justify-content-around my-4">

                    <button type='submit' className='btn btn-lg btn-primary my-5 mx'>submit</button> <span>&nbsp;</span>
                    <button type='button' className='btn btn-lg btn-danger my-5' onClick={handleClear}>clear</button>
                </div>
            </form>
        </div>
    )
}

export default EditForm
