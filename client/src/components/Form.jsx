import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

import { addData } from '../api/index.js';




const initialData = { name: '', email: '', phone: '', course: '', address: '' }

const Form = () => {
    const [formData, setFormData] = useState(initialData);
    const navigate = useNavigate()

    const handleChange = (e) => {

        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        addData(formData);
        setFormData(initialData);
        navigate('/data');
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

export default Form
