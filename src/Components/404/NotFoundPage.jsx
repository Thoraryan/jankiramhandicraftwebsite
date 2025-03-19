import React from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle } from "lucide-react"; 

const NotFoundPage = () => {
    return (
        <div className='container'>
            <div className="row vh-100 align-items-center justify-content-center">
                <div className='w-fit text-center'>
                <AlertTriangle className="text-danger" size={200} /> 
                    <h2 className="fs-3 w-fit fw-semibold">Not Found Page</h2>
                    <Link to="/" className='w-fit text-dark'>Go To Home Page</Link>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage
