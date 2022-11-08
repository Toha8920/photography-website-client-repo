import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))

    }

    return (
        <div className="max-w-sm mx-auto">
            <Card>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="email1"
                                value="Your Name"
                            />
                        </div>
                        <TextInput
                            name='name'
                            type="text"
                            placeholder="your name"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            name='email'
                            type="email"
                            placeholder="email"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            name='password'
                            type="password"
                            required={true}
                        />
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default SignUp;