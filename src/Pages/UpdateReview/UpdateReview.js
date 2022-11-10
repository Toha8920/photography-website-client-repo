import { Label, TextInput } from 'flowbite-react';
import React, { useContext, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const UpdateReview = () => {
    const updateReview = useLoaderData();
    const { user } = useContext(AuthContext);
    const { _id, name, review, ratting } = updateReview;
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const ratting = form.ratting.value;


        const updated = {
            ratting: ratting,
            review: review,
        }

        fetch(`https://photography-server-ten.vercel.app/updateReview/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(updated)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                navigate('/myreviews')
            })

    }



    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-center items-center">
            <div className='w-[100vh] ml-5'>
                <TextInput
                    id="large"
                    type="text"
                    sizing="lg"
                    defaultValue={review}
                    name='review'
                />
            </div>
            <div className='w-[100vh] ml-5'>
                <TextInput
                    id="large"
                    type="text"
                    sizing="lg"
                    name='ratting'
                />
            </div>
            <input className='bg-orange-400 p-2 rounded-md' type="submit" value="Submit" />
        </form>
    );
};

export default UpdateReview;