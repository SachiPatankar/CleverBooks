import React, { useState, useEffect } from 'react';
import ProblemCard from './ProblemCard';

const ProblemExplainer = () => {
  const [index, setIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const handleBack = () => {
    setIsAutoScrolling(false);
    setIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const handleFront = () => {
    setIsAutoScrolling(false); 
    setIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  useEffect(() => {
    if (isAutoScrolling) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isAutoScrolling]);

  const data = [
    {
      src: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5150ea3f0a_Ease%20of%20use.svg",
      heading: "Ease of use, for everyone",
      description: "With an intuitive interface and empathetic design, Crest requires only minimal training (or beginner-level knowledge of supply chain) to use.",
    },
    {
      src: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326dab14ea3f0b_Purpose-built%20%26%20ever-improving%20tech.svg",
      heading: "Purpose built, and ever improving tech",
      description: "With an intuitive interface and empathetic design, Crest requires only minimal training (or beginner-level knowledge of supply chain) to use.",
    },
    {
      src: "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5150ea3f0a_Ease%20of use.svg",
      heading: "Deep Domain Expertise",
      description: "With an intuitive interface and empathetic design, Crest requires only minimal training (or beginner-level knowledge of supply chain) to use.",
    },
  ];

  return (
    <div>
      <div className="items-center p-8 lg:p-24 flex bg-[#F2F2F2]">
        <div>
          <button onClick={handleBack}>
            <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
              loading="lazy"
              alt=""
              className="transform -scale-x-100 h-16"
            />
          </button>
        </div>

        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {data.map((item, idx) => (
              <div key={idx} className="min-w-full">
                <ProblemCard
                  src={item.src}
                  heading={item.heading}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <button onClick={handleFront}>
            <img
              src="https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/639b3e775b326d5122ea3ebb_slider-arrow.svg"
              loading="lazy"
              alt=""
              className="h-16"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemExplainer;


