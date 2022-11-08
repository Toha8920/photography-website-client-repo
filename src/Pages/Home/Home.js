import { Button, Carousel } from 'flowbite-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeCard from '../../Pages/HomeCard/HomeCard'

const Home = () => {

    const [events, setEvents] = useState([])

    fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setEvents(data)
        })

    return (
        <div>
            <div className="h-56 sm:h-64 xl:h-[600px] 2xl:h-96">
                <Carousel slideInterval={5000}>
                    <img className=''
                        src="https://www.wedding-spot.com/blog/sites/wsblog/files/images/migrated/258-wedding%2Bphotographer%2Btaking%2Bpictures%2Bof%2Bbride%2Bposing%2Bon%2Bground%2Bin%2Bwedding%2Bdress.jpg"
                        alt="..."
                    />
                    <img
                        src="https://www.splento.com/blog/wp-content/uploads/2021/07/Sports-photography.jpg"
                        alt="..."
                    />
                    <img
                        src="https://i.ytimg.com/vi/zsO9IObsaRA/maxresdefault.jpg"
                        alt="..."
                    />
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5705c778d210b8bf599d454c/1584232784066-JN70D7ZRD0NU5QZNT18W/Cook_and_Waiter-20big.jpg"
                        alt="..."
                    />
                    <img
                        src="http://greggardner.com.au/commercialphotographer/wp-content/uploads/hero-final-low-res-1024x682.jpg"
                        alt="..."
                    />
                </Carousel>
            </div>
            <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mt-10'>
                {
                    events.map(event => <HomeCard

                        key={event.id}
                        event={event}
                    ></HomeCard>)
                }
            </div>
            <div>
                <Button className='mx-auto mt-4' gradientDuoTone="pinkToOrange">
                    <Link to='/services'>View All</Link>
                </Button>
            </div>
        </div>
    );
};

export default Home;