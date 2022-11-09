import React, { useState } from 'react';
import useTitle from '../../hooks/UseTitle';
import Service from '../Service/Service';

const Services = () => {

    const [events, setEvents] = useState([]);
    useTitle('Services')

    fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {

            setEvents(data);
        })

    return (
        <div>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    events.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;