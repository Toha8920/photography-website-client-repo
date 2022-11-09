import { Table } from 'flowbite-react';
import React from 'react';

const MyReviewsRow = ({ rv }) => {
    const { _id, name, review, email } = rv;
    console.log(rv)

    const handleDelete = _id => {
        const procceed = window.confirm('Are you sure,you want to cancel this review');
        if (procceed)
}

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
                <button>X</button>
            </Table.Cell>
        </Table.Row>
    );
};

export default MyReviewsRow;