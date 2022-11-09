import { Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/UseTitle';
import toast from 'react-hot-toast';

const AddService = () => {
    const { user } = useContext(AuthContext);
    useTitle('Add Service')

    const handleAddServices = event => {
        event.preventDefault();
        const form = event.target;
        const serviceName = form.serviceName.value;
        const photo = form.photo.value;
        const description = form.description.value;
        const price = form.price.value;
        const email = form.email.value || 'unregistered';

        const services = {
            title: serviceName,
            image: photo,
            description,
            price,
            email
        }

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('added successfully')
                    form.reset();
                }
            })
    }

    return (
        <div className='max-w-lg mx-auto'>
            <form onSubmit={handleAddServices} className="flex flex-col gap-4 ">
                <div className=''>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="service"
                            value="Service Name"
                        />
                    </div>
                    <TextInput
                        name='serviceName'
                        id="small"
                        type="text"
                        sizing="lg"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="photo"
                            value="Photo URL"
                        />
                    </div>
                    <TextInput
                        name='photo'
                        id="base"
                        type="text"
                        sizing="md"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="description"
                            value="Description"
                        />
                    </div>
                    <TextInput
                        name='description'
                        id="large"
                        type="text"
                        sizing="lg"
                    />
                    <Label
                        htmlFor="service"
                        value="Service Price"
                    />
                    <TextInput
                        name='price'
                        id="large"
                        type="text"
                        sizing="lg"
                    />
                    <div className="mb-2 block">
                        <Label
                            htmlFor="description"
                            value="Email"
                        />
                    </div>
                    <TextInput
                        name='email'
                        id="large"
                        type="text"
                        sizing="lg"
                        defaultValue={user?.email}
                        readOnly
                    />
                </div>
                <input type="submit" value="Add Services" className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900' />
            </form>
        </div>
    );
};

export default AddService;