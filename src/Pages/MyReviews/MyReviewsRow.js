import { Table } from 'flowbite-react';

const MyReviewsRow = ({ rv, handleDelete, handleUpdateReview }) => {

    const { _id, name, review, email } = rv;

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