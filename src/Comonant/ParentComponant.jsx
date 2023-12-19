// ParentComponent.js

import React, { useState } from 'react';
import CounterBtn from './CounterBtn';

const ParentComponent = () => {
  const [parentCount, setParentCount] = useState(0);

  const handleParentCountChange = (newCount) => {
    setParentCount(newCount);
  };

  return (
    <div>
      <p>Parent count: {parentCount}</p>
      <CounterBtn initialCount={parentCount} onCountChange={handleParentCountChange} />
    </div>
  );
};

export default ParentComponent;
