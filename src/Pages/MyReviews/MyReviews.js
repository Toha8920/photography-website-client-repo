import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewsRow from './MyReviewsRow';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/UseTitle';
import { useNavigate } from 'react-router-dom';

const MyReviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useTitle('Services')
    const navigate = useNavigate();

    console.log(reviews)
    useEffect(() => {
        fetch(`https://photography-server-ten.vercel.app/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                setReviews(data)

            })
    }, [user?.email, logOut])


    const handleUpdateReview = (id) => {
        navigate(`/updateReview/${id}`)
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure,you want to cancel this review');
        if (proceed) {
            fetch(`https://photography-server-ten.vercel.app/review/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('deleted')
                        const remaining = reviews.filter(rv => rv._id !== id);
                        setReviews(remaining)
                    }
                })
        }
    }

    return (
        <>
            {
                reviews.length > 0 ? <Table className='border'>
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
                        <Table.HeadCell>
                            Update
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {
                            reviews.map(rv => <MyReviewsRow
                                key={rv._id}
                                rv={rv}
                                handleDelete={handleDelete}
                                handleUpdateReview={handleUpdateReview}
                            ></MyReviewsRow>)
                        }
                    </Table.Body>
                </Table>
                    :
                    <div className='text-4xl text-center p-10'>
                        <span>No review were added</span>
                    </div>
            }
        </>
    );
};

export default MyReviews;