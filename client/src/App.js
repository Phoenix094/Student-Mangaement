import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Form from './components/Form';
import Navbar from './components/Navbar';
import Table from './components/Table';
import EditForm from './components/EditForm';


const App = () => {
  return (
    <>
      <Router >
        <Navbar />
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/data' element={<Table />} />
          <Route path='/edit/:id' element={<EditForm />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
