import React from 'react';

function Container({ children }: { children: React.ReactNode }) {
  return <div className="xl:px-[200px] max-w[1440px] px-4 bg-[#F9F9F9]">

    {children}

  </div>;
}

export default Container;
