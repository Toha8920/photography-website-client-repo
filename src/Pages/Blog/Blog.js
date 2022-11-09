import React from 'react';
import useTitle from '../../hooks/UseTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <div className='border mt-5 shadow-lg p-10'>
                <h1 className='text-2xl text-orange-500'>Difference between SQL and NoSQL?</h1>
                <p>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div className='border mt-5 shadow-lg p-10'>
                <h1 className='text-2xl text-orange-500'>What is JWT, and how does it work??</h1>
                <p>Jwt means JSON WEB TOKEN. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                    JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>
            </div>
            <div className='border mt-5 shadow-lg p-10'>
                <h1 className='text-2xl text-orange-500'>What is the difference between javascript and NodeJS?</h1>
                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div className='border mt-5 shadow-lg p-10'>
                <h1 className='text-2xl text-orange-500'>How does NodeJS handle multiple requests at the same time?</h1>
                <p>

                    I understand that Node.js uses a single-thread and an event loop to process requests only processing one at a time (which is non-blocking). But still, how does that work, lets say 10,000 concurrent requests. The event loop will process all the requests? Would not that take too long?

                    I understand that multi-threaded web server will be more expensive in resources (memory, CPU), but would not it still be faster? I am probably wrong; please explain how this single-thread is faster in lots of requests, and what it typically does (in high level) when servicing lots of requests like 10,000.</p>
            </div>
        </div>
    );
};

export default Blog;