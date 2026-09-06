import React from 'react';
import Typewriter from  'typewriter-effect';

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ['Technical Product Manager', 'Product Manager', 'AI Product Manager'],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed:20,
        }}
      />
    </div>
  )
}

export default Typed