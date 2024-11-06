import React from 'react';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center h-screen text-center'>
            <div>
            <h1 className="text-8xl text-colorPrimary font-bold">404</h1>
            <p>Data Not Found</p>
            </div>
        </div>
    );
};

export default ErrorPage;