import React from 'react';

const TestimonialCard = ({
    descr, photo, name, position, he1, he2, p1, p2, prod, handleBack, handleFront
}) => {
    return (
        <div className='flex flex-col gap-8 mt-20 mr-20 ml-20 items-center justify-center lg:flex-row '>
            <div className='basis-3/5'>
                <div className='flex-col m-4 max-w-2xl'>
                    <div>
                        <p>{descr}</p>
                    </div>
                    <div className='flex gap-8 m-8 items-center'>
                        <img className='h-16 w-16 rounded-full' alt="" loading="lazy" src={photo} />
                        <div>
                            <p className='font-semibold text-xl'>{name}</p>
                            <p className='font-semibold'>{position}</p>
                        </div>
                    </div>
                    <div className='flex gap-5 m-6'>
                        <button onClick={handleBack}>
                            <img
                                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                                loading="lazy"
                                alt=""
                                className='transform -scale-x-100'
                            />
                        </button>
                        <button onClick={handleFront}>
                            <img
                                src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
                                loading="lazy"
                                alt=""
                            />
                        </button>
                    </div>
                    <div className='flex gap-5 m-4'>
                        <div className='bg-[#F1E9FC] rounded-xl m-4 pt-8 pb-8 pr-8 pl-8 text-xl'>
                            {he1} {p1}
                        </div>
                        <div className='bg-[#F1E9FC] rounded-xl m-4 pt-8 pb-8 pr-8 pl-8 text-xl'>
                            {he2} {p2}
                        </div>
                    </div>
                </div>
            </div>
            <div className='basis-2/5 p-8'>
                <div>
                <img
                    alt=""
                    loading="lazy"
                    src={prod}
                    className='object-cover max-w-md'
                />
                </div>
                
            </div>
        </div>
    );
};

export default TestimonialCard;
