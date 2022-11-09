import { Card } from 'flowbite-react';
import React from 'react';
import './HomeCard.css'

const HomeCard = ({ event }) => {
    const { title, price, image } = event;
    console.log(event)
    return (
        <div className="max-w-sm image">
            <Card className='mx-auto'
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={image}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </Card>
        </div>
    );
};

export default HomeCard;