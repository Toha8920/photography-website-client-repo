import { Table } from 'flowbite-react';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const MyReviewsRow = ({ rv, handleDelete, handleUpdateReview }) => {
    const { user } = useContext(AuthContext)
    const { _id, name, review, email } = rv;
    console.log(rv)



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