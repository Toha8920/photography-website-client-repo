import { Button, Card } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({ service }) => {
    const { _id, title, price, image, rating, description } = service;

    return (
        <div className="max-w-sm image">
            <Card className='mx-auto'
            >
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img className='rounded-md' src={image} alt="" />
                    </PhotoView>
                </PhotoProvider>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-semibold text-gray-700 dark:text-gray-400 ">
                    Price: $ {price}
                </p>
                <p className="font-semibold text-gray-700 dark:text-gray-400 ">
                    {rating}
                </p>
                <p className="font-semibold text-gray-700 dark:text-gray-400 ">
                    {description.slice(0, 100)}...
                </p>
                <Button gradientDuoTone="purpleToBlue">
                    <Link to={`/services/${_id}`}>
                        Details
                    </Link>
                </Button>
            </Card>
        </div>
    );
};


export default Service;