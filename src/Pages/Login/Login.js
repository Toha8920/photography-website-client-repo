import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.error(err))

    }

    return (
        <div className="max-w-sm mx-auto">
            <Card>
                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block text-start">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            name='email'
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
                            id="password1"
                            type="password"
                            name='password'
                            placeholder='password'
                            required={true}
                        />
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                    <p>Log in with google</p>
                    <button className='text-2xl mx-auto'><FaGoogle></FaGoogle></button>
                </form>
            </Card>
        </div>
    );
};

export default Login;