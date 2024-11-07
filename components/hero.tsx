import Ajay from '../app/assets/image.png';
import Image from 'next/image'
const Hero = () => {
  return (
    <div>
    <div className="flex justify-center">
      <div className="mt-10">
        <h1 className="text-4xl md:text-6xl font-bold text-orange-950 tracking-tighter">
          Bolo Zuba <span className="text-orange-50">Canceri</span>
        </h1>
        <h3 className="text-orange-950 flex justify-center text-lg md:text-xl tracking-tight">
          Zindagi se bore? Tambaaku try karo!
        </h3>
        <div className="flex justify-center mt-4 text-sm">
          <button className="text-orange-950 bg-orange-50 md:rounded-3xl md:px-3 md:py-1 px-2 py-0.5 rounded-2xl hover:bg-orange-100">
            Die Now
          </button>
        </div>
      </div>
    </div>
    <div className='flex justify-center'>
    <Image src={Ajay} alt="Ajay sir"  height={300} width={300} 
     className="w-[60%] md:w-[30%] h-full object-contain sticky top-0 right-0"/>
      </div>
    </div>
  );
};

export default Hero;
