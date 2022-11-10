import { Card } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import ServiceDetailsReview from './ServiceDetailsReview';


const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const service = useLoaderData();
    const { _id, image, description, price, title, rating } = service;

    const [reviews, setReviews] = useState([]);

    const handleReview = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const ratting = form.ratting.value;
        const review = form.review.value;
        const email = user?.email;
        const image = user?.photoURL
        const productId = _id;


        const reviews = {
            name: name,
            ratting: ratting,
            review: review,
            email: email,
            reviewId: productId,
            image
        }
        fetch(`https://photography-server-ten.vercel.app/review`, {
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
    useEffect(() => {
        fetch('https://photography-server-ten.vercel.app/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])

    const filterReview = reviews.filter(i => i.reviewId === _id)

    return (
        <div>
            <div className="w-full">
                <Card
                    imgAlt="Meaningful alt text text-3xl for an image that is not purely decorative"
                    imgSrc={image}
                >
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <p className="font-normal text-2xl text-gray-700 dark:text-gray-400">
                        {description}
                    </p>
                    <p className="font-bold text-gray-700 dark:text-gray-400">
                        Price: ${price}
                    </p>
                    <p className="font-bold text-gray-700 dark:text-gray-400">
                        Ratting: {rating}
                    </p>
                    <p></p>
                </Card>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                <div className='flex justify-center items-center'>
                    {
                        user?.uid ? <div>
                            <form onSubmit={handleReview}>
                                <input className='mt-5 rounded ml-2' type="text" name='name' placeholder='Your name' defaultValue={user?.displayName} required readOnly /> <br />
                                <input className='mt-3 rounded ml-2' type="number" placeholder='Please add a ratting' name='ratting' /><br />
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
                <div>
                    {filterReview.map(rv => <ServiceDetailsReview
                        key={rv._id}
                        rv={rv}
                    ></ServiceDetailsReview>)}
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;