import React from 'react';

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black text-white flex items-center justify-center z-[9999]">
      <p className="text-2xl">Loading...</p>
    </div>
  );
};

export default Loading;