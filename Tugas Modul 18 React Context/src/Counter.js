import React from 'react';

import { useCount } from './CountContext';

const Counter = () => {

  const counts = useCount()

  // set dispatch and state count from useCount()
  

  return (
    <>
      {/* change 0 with count from context */}
      Count: {counts.s.count}
      <div>
        {/* use dispatch for onClick method */}
        <button className="count-button" onClick={() => counts.d({type: 'increment'})} >+</button>
        <button className="count-button" onClick={() => counts.d({type: 'decrement'})}>-</button>
      </div>
    </>
  );
}

export default Counter;