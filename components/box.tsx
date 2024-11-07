import Image from 'next/image'
import Vimal from "../app/assets/card-image.png";
const Box = () => {
  return (
    <div className='flex bg-orange-100 rounded-lg px-4 mt-4 h-56 ml-4 '>
        <div className=' sm:w-full sm:h-full invisible sm:visible w-14'>
        <Image src={Vimal} alt="Picture of the author"  height={265} width={222} 
     className="h-full object-contain sticky top-0 right-0 invisible sm:visible"/>
        </div>
        <div className='sm:invisible visible mt-20 w-52 sm:w-0'>
        <Image src={Vimal} alt="Picture of the author"  height={265} width={222}/>
        </div>
        <div className='flex flex-col align-middle justify-center pl-4'>
        <h1 className='text-[17px] text-orange-950 font-bold tracking-tight mt-4 pl-11'>Elachi Pan Masala</h1>
        <p className='w-56 text-sm font-normal text-orange-800 pl-8 tracking-tight'>Elachi ka swaad, hasi ka tadka! Vimal Elachi—breath fresh nahi, mood fresh kare!</p>
        <div className='pl-10 mt-2 flex gap-3 text-sm'>
        <button className="bg-orange-500 text-orange-50 rounded-3xl px-3 py-1 0">
        Buy Now
          </button>
          <button className="text-orange-950 bg-orange-50 rounded-3xl px-3 py-1 ">
          Buy later
          </button>
        </div>
        </div>
        
    </div>
  )
}

export default Box