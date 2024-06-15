import React from 'react';
import sunImg from '../src/assets/img/01d.svg';

function App() {
  return (
    <>
      <div className="bg-big-stone-300 min-w-screen min-h-screen  flex justify-center items-center">
        <div className="w-full px-5 bg-black py-2">
          <nav className=" h-20 border border-white px-5 bg-black rounded-t-2xl flex justify-between items-center  text-white">
            <div className="flex gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>

              <p>Birmingham, United Kingdom.</p>
            </div>

            <div class="flex gap-2">
              <input
                placeholder="Search city"
                class="w-80 h-8 rounded-2xl px-4 py-2"
                type="text"
              />
              <button className="flex rounded-2xl gap-2 bg-big-stone-700 py-1 px-4">
                <span class="label">Search</span>
                <span class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </span>
              </button>
            </div>
            <div>Account</div>
          </nav>
          <div className="h-screen">
            <div className="grid grid-cols-1  md:grid-cols-[3fr_1fr] h-1/2">
              <div className="border border-big-stone-100 pt-3">
                <div className="flex justify-between items-center px-5 py-2 ">
                  <div className="flex gap-5 text-xl text-big-stone-50 text-gray-400">
                    <p>Today</p>
                    <p>Tomorrow</p>
                    <p className="text-white">Next 7days</p>
                  </div>
                  <div className="flex gap-5 text-xl">
                    <p className="px-4 border py-1 bg-big-stone-800 rounded-2xl text-center text-white font-bold">
                      Forecast
                    </p>
                    <p className="px-4 py-1  rounded-2xl text-center border text-gray-300 font-bold">
                      Air Quality
                    </p>
                  </div>
                </div>
                <div className="grid space-x-3 grid-cols-1 w-full md:grid-cols-[1fr_3fr] py-8 px-4">
                  <div className="bg-big-stone-800 rounded-2xl  text-white">
                    <div className="flex justify-around px-5 text-xl font-bold bg-big-stone-900 rounded-t-2xl py-3 ">
                      <p>Monday</p>
                      <p>11:42pm</p>
                    </div>
                    <div className="flex text-center">
                      <div className="w-1/2 mt-5">
                        <div className="space-y-3">
                          <h3 className="text-7xl font-bold">16&deg;</h3>
                          <div className="text-xs">
                            <p>Real Feel: 18&deg;C</p>
                            <p> Wind N E: 5-8km/h</p>
                            <p> Humidity: 51%</p>
                          </div>
                        </div>
                      </div>
                      <div className="w-1/2 mt-5">
                        <div className="flex justify-center">
                          <img
                            className="object-cover h-20"
                            src={sunImg}
                            alt="Sun Image"
                          />
                        </div>
                        <div className="text-xs text-center mt-2">
                          <p>sunrise: 8:02am</p>
                          <p>sunset: 8:02pm</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-x-5 grid grid-cols-7 px-5">
                    <div className="flex flex-col justify-around items-center rounded-2xl bg-big-stone-700">
                      <div className="text-lg text-big-stone-50 border-b border-big-stone-50">
                        Tue
                      </div>
                      <div>
                        <img className="h-20" src={sunImg} alt="Sun Image" />
                      </div>
                      <div className="text-4xl font-bold text-big-stone-50 ml-1">
                        10&deg;
                      </div>
                    </div>
                    <div className="flex flex-col justify-around items-center rounded-2xl bg-big-stone-700">
                      <div className="text-lg text-big-stone-50 border-b border-big-stone-50">
                        Tue
                      </div>
                      <div>
                        <img className="h-20" src={sunImg} alt="Sun Image" />
                      </div>
                      <div className="text-4xl font-bold text-big-stone-50 ml-1">
                        10&deg;
                      </div>
                    </div>
                    <div className="flex flex-col justify-around items-center rounded-2xl bg-big-stone-700">
                      <div className="text-lg text-big-stone-50 border-b border-big-stone-50">
                        Tue
                      </div>
                      <div>
                        <img className="h-20" src={sunImg} alt="Sun Image" />
                      </div>
                      <div className="text-4xl font-bold text-big-stone-50 ml-1">
                        10&deg;
                      </div>
                    </div>
                    <div className="flex flex-col justify-around items-center rounded-2xl bg-big-stone-700">
                      <div className="text-lg text-big-stone-50 border-b border-big-stone-50">
                        Tue
                      </div>
                      <div>
                        <img className="h-20" src={sunImg} alt="Sun Image" />
                      </div>
                      <div className="text-4xl font-bold text-big-stone-50 ml-1">
                        10&deg;
                      </div>
                    </div>
                    <div className="flex flex-col justify-around items-center rounded-2xl bg-big-stone-700">
                      <div className="text-lg text-big-stone-50 border-b border-big-stone-50">
                        Tue
                      </div>
                      <div>
                        <img className="h-20" src={sunImg} alt="Sun Image" />
                      </div>
                      <div className="text-4xl font-bold text-big-stone-50 ml-1">
                        10&deg;
                      </div>
                    </div>
                    <div className="flex flex-col justify-around items-center rounded-2xl bg-big-stone-700">
                      <div className="text-lg text-big-stone-50 border-b border-big-stone-50">
                        Tue
                      </div>
                      <div>
                        <img className="h-20" src={sunImg} alt="Sun Image" />
                      </div>
                      <div className="text-4xl font-bold text-big-stone-50 ml-1">
                        10&deg;
                      </div>
                    </div>
                    <div className="flex flex-col justify-around items-center rounded-2xl bg-big-stone-700">
                      <div className="text-lg text-big-stone-50 border-b border-big-stone-50">
                        Tue
                      </div>
                      <div>
                        <img className="h-20" src={sunImg} alt="Sun Image" />
                      </div>
                      <div className="text-4xl font-bold text-big-stone-50 ml-1">
                        10&deg;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-big-stone-100"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] h-1/2">
              <div className="border  border-big-stone-100"></div>
              <div className="border border-big-stone-100"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
