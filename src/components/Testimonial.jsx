import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const handleBack = () => {
    setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleFront = () => {
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

 

  const data = [
    {
      descr: "D2C brands face issues with supply chain management and high growth startups are not equipped to run their demand forecast manually. Crest automates all the workflows and helps brands predict high demand periods and be ready to cater to customer demands. It has a direct impact on the revenue readiness of a company and that's the value we see Crest unlocking for many companies in the future. Rahul and team have built a robust product with years of their experience distilled into the workflows.",
      name: "Diksha Pandey",
      position: "Co-founder, Samosa Party",
      photo: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/651c00235cd9c2cd10fb1976_Samosa%20Party%20Client%20Image.webp",
      he1: "upto 95%",
      p1: "Demand Fulfilment",
      he2: "upto 95%",
      p2: "Demand Fulfilment",
      prod: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddc11c29c3652662f0739_samosa%20party%20image.webp",
    },
    {
      descr: "As Co-founders, we had zero clue on the real time stock levels in our warehouse. It felt like a battle to manually update invoices from EE to Zoho, so that at least some data points can be tracked.While we had already implemented Crest I had no clue that they could make this API integration work for us and exactly the way we wanted it to work. Thank you team Rahul Vishwakarma & Yogesh Byahatti for identifying the problem and being so quick with the solution, kudos to the amazing team you have.",
      name: "Kirti Goel",
      position: "Co-founder,P-TAL",
      photo: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664ddd1080709540ff764308_P-Tal%20founder.jpg",
      he1: "Automated Invoice Reconciliation",
      p1: "",
      he2: "Channel wise Sales Classification",
      p2: "",
      prod: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/664c90f75b0f0e735016706b_P-tal-p-500.webp",
    },
    // Add more testimonials as needed
  ];

  return (
    <div>
      <div className=''>
      <TestimonialCard className="transition-opacity"
        descr={data[index].descr}
        name={data[index].name}
        position={data[index].position}
        photo={data[index].photo}
        he1={data[index].he1}
        p1={data[index].p1}
        he2={data[index].he2}
        p2={data[index].p2}
        prod={data[index].prod}
        handleBack={handleBack}
        handleFront={handleFront}
       
        
      />
       </div>
    </div>
  );
};

export default Testimonial;
