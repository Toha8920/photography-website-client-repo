import { Table } from 'flowbite-react';
import React, { useContext, useEffect } from 'react';
import { FaEdit, FaFacebook, IconName } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const MyReviewsRow = ({ rv, handleDelete, handleUpdateReview }) => {
    const { user } = useContext(AuthContext)
    const { _id, name, review, email } = rv;
    console.log(rv)

    useEffect(() => {
        fetch(`http://localhost:5000/review/${user?.email}`,)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [])

    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {name}
            </Table.Cell>
            <Table.Cell>
                {review}
            </Table.Cell>

            <Table.Cell>
                {email}
            </Table.Cell>
            <Table.Cell>
                <button onClick={() => handleDelete(_id)}>Delete</button>
            </Table.Cell>
            <Table.Cell>
                <button onClick={() => handleUpdateReview(_id)}>Edit</button>
            </Table.Cell>
        </Table.Row>
    );
};

export default MyReviewsRow;