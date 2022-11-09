import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext, useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const ServiceDetails = () => {
    const { user } = useContext(AuthContext);

    const service = useLoaderData();
    const { _id, image, description, price, title } = service;

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const ratting = form.ratting.value;
        const review = form.review.value;
        const email = user?.email;
        const productId = _id;


        const reviews = {
            name: name,
            ratting: ratting,
            review: review,
            email: email,
            reviewId: productId
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('added successfully')
                    form.reset();
                }
            })

    }



    return (
        <div>
            <div className="w-full">
                <Card
                    imgAlt="Meaningful alt text for an image that is not purely decorative"
                    imgSrc={image}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {description}
                    </p>
                </Card>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div>
                    {
                        user?.uid ? <div>
                            <form onSubmit={handleReview}>
                                <input className='mt-5 rounded ml-2' type="text" name='name' placeholder='Your name' defaultValue={user?.displayName} required readOnly /> <br />
                                <input className='mt-3 rounded ml-2' type="text" placeholder='Please add a ratting' name='ratting' /><br />
                                <textarea className='mt-3 rounded ml-2' name="review" placeholder='Your review' id="" cols="50" rows=""></textarea> <br />
                                <input className='mt-2 ml-2 bg-orange-400 p-3 rounded-md' type="submit" value="Add review" />
                            </form>
                        </div>
                            :
                            <>
                                <div className='flex justify-center items-center h-20'>
                                    <p className='text-2xl text-orange-400'>Please login to add a review <Link className='underline' to='/login'>Login</Link> </p>
                                </div>
                            </>
                    }
                </div>
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src={user?.photoURL} alt="" className="object-cover w-12 h-12 rounded-full dark:dark:bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">{user?.displayName}</h4>
                                <span className="text-xs dark:dark:text-gray-400">2 days ago</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-2 dark:dark:text-yellow-500">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                            </svg>
                            <span className="text-xl font-bold">4.5</span>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-sm dark:dark:text-gray-400">
                        <p>Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu dictum lectus consequat vitae. Etiam ut dolor id justo fringilla finibus.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;