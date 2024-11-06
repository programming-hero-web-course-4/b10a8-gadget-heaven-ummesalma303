import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate=useNavigate()
    return (
        <div className='flex justify-center items-center h-screen text-center'>
            <div>
            <h1 className="text-8xl text-colorPrimary font-bold">404</h1>
                <p>Data Not Found</p>
                <button onClick={()=>navigate('/')} className='btn text-white bg-colorPrimary'>Go Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;