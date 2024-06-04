import React, { useEffect, useState } from 'react'
import Counter from './Counter'


const CounterPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.counter-container'); // Adjust selector as needed
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;

            setIsVisible(elementTop < windowHeight);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-[#151218] text-white flex flex-col gap-4 lg:flex-row py-5 text-center justify-center items-center py-44 lg:py-72 ">
           
                <div className="basis-1/3 flex-col my-7">

                    <div className='items-end flex justify-center'>
                        <div> <Counter n={100} /></div>

                        <div>%</div>
                    </div>
                    <div className='font-bold text-3xl'>Stockouts</div>

                </div>
                <div className="basis-1/3 flex-col my-7">


                    <div className='items-end flex justify-center'>
                        <div> <Counter n={100} /></div>

                        <div>%</div>
                    </div>
                    <div className='font-bold text-3xl'>Cash recovery cycle</div>
                </div>
                <div className="basis-1/3 flex-col my-7">

                    <div className='items-end flex justify-center'>
                        <div> <Counter n={100} /></div>

                        <div>%</div>
                    </div>
                    <div className='font-bold text-3xl'>Revenue</div>
                </div>
        </div>
    );
};

export default CounterPage;
