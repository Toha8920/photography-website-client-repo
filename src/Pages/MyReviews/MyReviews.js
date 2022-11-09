import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewsRow from './MyReviewsRow';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

    console.log(reviews)
    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])

    return (
        <Table className='border'>
            <Table.Head>
                <Table.HeadCell>

                    Your name
                </Table.HeadCell>
                <Table.HeadCell>
                    Your review
                </Table.HeadCell>
                <Table.HeadCell>
                    Email
                </Table.HeadCell>

                <Table.HeadCell>
                    Delete
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {
                    reviews.map(rv => <MyReviewsRow
                        key={rv._id}
                        rv={rv}
                    ></MyReviewsRow>)
                }
            </Table.Body>
        </Table>
    );
};

export default MyReviews;