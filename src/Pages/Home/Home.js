import { Accordion, Button, Carousel } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/UseTitle';
import HomeCard from '../../Pages/HomeCard/HomeCard'
import './Home.css'

const Home = () => {

    const [events, setEvents] = useState([]);
    useTitle('Home')

    useEffect(() => {
        fetch('https://photography-server-ten.vercel.app/services?size=3')
            .then(res => res.json())
            .then(data => {
                setEvents(data)

            })
    }, [])



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

                        key={event._id}
                        event={event}
                    ></HomeCard>)
                }
            </div>
            <div>
                <Button className='mx-auto mt-4' gradientDuoTone="pinkToOrange">
                    <Link to='/services'>View All</Link>
                </Button>
            </div>
            <div className='mt-5'>
                <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
                    <div className="container flex flex-col mx-auto lg:flex-row">
                        <div className="w-full lg:w-1/2 background-image">
                            <img className='rounded-sm' src="https://cdn.pixabay.com/photo/2020/06/26/21/36/sunset-5344024__340.jpg" alt="" />
                        </div>
                        <div className="flex flex-col w-full p-6 lg:w-1/2 md:p-8 lg:p-12">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 dark:dark:text-violet-400">
                                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <h2 className="text-3xl font-semibold leading-none">Modern Photography</h2>
                            <p className="mt-4 mb-8 text-sm">This is my photography website. You can hire me.</p>
                            <button className="bg-orange-400 self-start px-10 py-3 text-lg font-medium rounded-3xl dark:dark:bg-violet-400 dark:dark:text-gray-900"><Link to='/services'>Get started</Link></button>
                        </div>
                    </div>
                </section>
            </div>
            <div>
                <Accordion className='mt-5 mb-5'>
                    <Accordion.Panel>
                        <Accordion.Title className='font-bold'>
                            Basically I am a photographar.
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                You can hire me for capture your moments. Visit my facebook <Link to='https://www.facebook.com/irk.toha' className='text-orange-600 underline'>Check Out</Link>
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className='font-bold'>
                            Want to know about my photography experience?
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                You can visit my service page.And you can also added some beside. <Link to='/services' className='text-orange-600 underline'>Services</Link>
                            </p>

                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title className='font-bold'>
                            Generally I capture wild photograph,weeding photograph.Want to know many? Please hit the button bellow.
                        </Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                I think I am not a best photographar.But I can gurenty you if you hire me I would be able to fill up your condition.I capture wild photography,weeding photography,journilism photography,sports photography and many others things.So you can hire me to capture any moments you want
                            </p>


                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    );
};

export default Home;