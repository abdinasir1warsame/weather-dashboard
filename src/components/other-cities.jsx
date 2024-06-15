import sunImg from '../assets/img/01d.svg';

const CitiesSection = () => {
  return (
    <div className="border border-big-stone-100">
      <div className="flex justify-between items-center px-5 py-6">
        <h3 className="text-xl font-bold">Other Large Cities </h3>
        <p className="text-gray-300">show All</p>
      </div>

      <div className="grid space-y-8 grid-cols-1 px-12 py-4">
        <div className="rounded-2xl background3 flex justify-around py-2 text-md">
          <div className="text-white space-y-2  ">
            <p className="text-gray-300 font-bold ">US</p>
            <p className="text-lg">California</p>
            <p className="text-gray-300 font-bold">Mostly Sunny</p>
          </div>
          <div className="flex flex-col justify-around items-center">
            <img className="h-12" src={sunImg} alt="" />
            <p className="font-bold text-2xl">29&deg;</p>
          </div>
        </div>
        <div className="rounded-2xl background3 flex justify-around py-2 text-md">
          <div className="text-white space-y-2  ">
            <p className="text-gray-300 font-bold ">US</p>
            <p className="text-lg">California</p>
            <p className="text-gray-300 font-bold">Mostly Sunny</p>
          </div>
          <div className="flex flex-col justify-around items-center">
            <img className="h-12" src={sunImg} alt="" />
            <p className="font-bold text-2xl">29&deg;</p>
          </div>
        </div>
        <div className="rounded-2xl background3 flex justify-around py-2 text-md">
          <div className="text-white space-y-2  ">
            <p className="text-gray-300 font-bold ">US</p>
            <p className="text-lg">California</p>
            <p className="text-gray-300 font-bold">Mostly Sunny</p>
          </div>
          <div className="flex flex-col justify-around items-center">
            <img className="h-12" src={sunImg} alt="" />
            <p className="font-bold text-2xl">29&deg;</p>
          </div>
        </div>
        <div className="rounded-2xl background3 flex justify-around py-2 text-md">
          <div className="text-white space-y-2  ">
            <p className="text-gray-300 font-bold ">US</p>
            <p className="text-lg">California</p>
            <p className="text-gray-300 font-bold">Mostly Sunny</p>
          </div>
          <div className="flex flex-col justify-around items-center">
            <img className="h-12" src={sunImg} alt="" />
            <p className="font-bold text-2xl">29&deg;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitiesSection;
