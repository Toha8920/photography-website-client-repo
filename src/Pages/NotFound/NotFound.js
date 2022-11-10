import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className=''>
            <div className='flex justify-center mt-10'>
                <img className='w-50 h-20 rounded-lg ' src="https://i1.sndcdn.com/artworks-000475897320-ko8uzh-t500x500.jpg" alt="" />

            </div>
            <p className='text-center'>Sorry, your searching route has not found</p>
            <p className='text-center'>Back to home <Link className='underline text-blue-700' to='/'>Home</Link></p>
        </div>
    );
};

export default NotFound;