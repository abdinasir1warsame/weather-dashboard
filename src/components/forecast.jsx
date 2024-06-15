import sunImg from '../assets/img/01d.svg';
import CitiesSection from './other-cities';

const Forecast = () => {
  return (
    <div className="h-screen grid grid-cols-[15fr_5fr] ">
      <div>
        <div className="  max-h-1/3">
          <div className="border border-big-stone-100 pt-3">
            <div className="flex justify-between items-center px-5 py-2 ">
              <div className="flex gap-5 text-xl text-big-stone-50 text-gray-400">
                <p>Today</p>
                <p>Tomorrow</p>
                <p className="text-white">Next 7days</p>
              </div>
              <div className="flex gap-5 text-xl">
                <p className="px-4 border py-1 background2 rounded-2xl text-center text-white font-bold">
                  Forecast
                </p>
                <p className="px-4 py-1  rounded-2xl text-center border text-gray-300 font-bold">
                  Air Quality
                </p>
              </div>
            </div>
            <div className="grid space-x-3 grid-cols-1 w-full md:grid-cols-[1fr_3fr] py-8 px-4">
              <div className="background3 rounded-2xl  text-white">
                <div className="flex justify-around px-5 text-xl font-bold background3 rounded-t-2xl py-3 ">
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
                <div className="flex flex-col justify-around items-center rounded-2xl background2">
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
                <div className="flex flex-col justify-around items-center rounded-2xl background2">
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
                <div className="flex flex-col justify-around items-center rounded-2xl background2">
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
                <div className="flex flex-col justify-around items-center rounded-2xl background2">
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
                <div className="flex flex-col justify-around items-center rounded-2xl background2">
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
                <div className="flex flex-col justify-around items-center rounded-2xl background2">
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
                <div className="flex flex-col justify-around items-center rounded-2xl background2">
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
        </div>
        <div className=" h-1/2">
          <div className="border  border-green-200"></div>
        </div>
      </div>

      <CitiesSection />
    </div>
  );
};
export default Forecast;
