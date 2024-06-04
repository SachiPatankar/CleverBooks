import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ScrollPage = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div>

      {/* Sections */}
      <div className="pt-16">
        <motion.div
          ref={ref1}
          id="section1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-red-400 p-8"
        >
          <h2 className="text-4xl text-white">Section 1</h2>
          <p className="text-white">Content for Section 1</p>
        </motion.div>
        <motion.div
          ref={ref2}
          id="section2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-green-400 p-8"
        >
          <h2 className="text-4xl text-white">Section 2</h2>
          <p className="text-white">Content for Section 2</p>
        </motion.div>
        <motion.div
          ref={ref3}
          id="section3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView3 ? 1 : 0, y: inView3 ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-blue-400 p-8"
        >
          <h2 className="text-4xl text-white">Section 3</h2>
          <p className="text-white">Content for Section 3</p>
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollPage;
