import React from 'react'
import { useSpring, animated } from 'react-spring'
import './animatetext.css'

const Counter = ({n}) => {
    const {number} = useSpring({
        from:{number:0},
        number:n,
        delay:200,
        config: {mass:1, tension:20, friction:10}
    });

  return (
    <animated.div className="font-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-9xl text-transparent bg-clip-text bg-300% animate-gradient ">{number.to((n)=> n.toFixed(0))}</animated.div>
  )
}

export default Counter