import { Spinner } from 'flowbite-react';
import React, { useState } from 'react';
import useTitle from '../../hooks/UseTitle';
import Service from '../Service/Service';

const Services = () => {

    const [events, setEvents] = useState([]);
    useTitle('Services')

    fetch('https://photography-server-ten.vercel.app/services')
        .then(res => res.json())
        .then(data => {

            setEvents(data);
        })

    return (

        <>
            {
                events.length > 0 ? <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                    {
                        events.map(service => <Service
                            key={service._id}
                            service={service}
                        ></Service>)
                    }
                </div>
                    :
                    <div className='flex justify-center items-center h-screen'>
                        <Spinner
                            aria-label="Extra large spinner example"
                            size="xl"
                        />
                    </div>
            }
        </>

    );
};

export default Services;