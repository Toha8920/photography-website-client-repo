import { Label, TextInput } from 'flowbite-react';
import React from 'react';

const AddService = () => {
    return (
        <div className='max-w-lg mx-auto'>
            <div className="flex flex-col gap-4 ">
                <div className=''>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="service"
                            value="Service Name"
                        />
                    </div>
                    <TextInput
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
                        id="large"
                        type="text"
                        sizing="lg"
                    />
                    <Label
                        htmlFor="service"
                        value="Service Price"
                    />
                    <TextInput
                        id="large"
                        type="text"
                        sizing="lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default AddService;