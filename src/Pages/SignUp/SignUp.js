import { Button, Card, Label, TextInput } from 'flowbite-react';
import React from 'react';

const SignUp = () => {
    return (
        <div className="max-w-sm mx-auto">
            <Card>
                <form className="flex flex-col gap-4">
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
                            placeholder="name@flowbite.com"
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
                            required={true}
                        />
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                    <p>Log in with google</p>
                </form>
            </Card>
        </div>
    );
};

export default SignUp;