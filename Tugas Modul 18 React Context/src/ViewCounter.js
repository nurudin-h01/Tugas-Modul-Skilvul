import React from 'react';

import { useCount } from './CountContext'

const ViewCounter = () => {
  // set state count from useCount
  const counter = useCount()
  return (
    <div>
      {/* change 0 with count from context */}
      Count is {counter.s.count}
    </div>
  );
}

export default ViewCounter;