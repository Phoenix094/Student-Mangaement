import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="d-flex ">
                <ul className="p-3 w-100 justify-content-center nav nav-tabs bg-black">

                    <li className="nav-item mx-2">
                        <Link className="rounded-0 nav-link text-light" to="/">Create</Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className="rounded-0 nav-link text-light" to="/data">View</Link>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Navbar
