import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { login, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err));


    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(err => console.err(err))
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
                </form>
                <div className='flex justify-between items-center'>
                    <p className='mr-4'>Log in with google</p>
                    <button onClick={handleGoogleSignIn} className='text-2xl mt-4 mx-auto'><FaGoogle></FaGoogle></button>
                </div>
                <p>Don't have an account Please  <Link className='underline' to='/signup'>Sign Up</Link></p>
            </Card>
        </div>
    );
};

export default Login;