import React from 'react';

import Navbar from './components/navbar';
import Forecast from './components/forecast';

function App() {
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="w-full min-h-screen background  ">
          <Navbar />
          <Forecast />
        </div>
      </div>
    </>
  );
}

export default App;
