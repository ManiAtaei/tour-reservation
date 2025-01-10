import React from 'react';

function Container({ children }: { children: React.ReactNode }) {
  return <div className="xl:px-[200px] px-4">

    {children}

  </div>;
}

export default Container;
