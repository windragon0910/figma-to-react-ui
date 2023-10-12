import { useState } from 'react';
import DropDownIcon from '../assets/icons/chevron-down.svg';
import LocationIcon_01 from '../assets/icons/frequency/marker-pin-01.svg';
import LocationIcon_02 from '../assets/icons/frequency/marker-pin-02.svg';

const CareLocation = () => {
  const [location, setLocation] = useState("");

  return (
    <div className="flex flex-col justify-start items-start rounded-md bg-white pt-4 pb-2 px-2 mt-2">
      <div className='text-[#9E77ED] w-full flex justify-between items-center'>
        <div className='flex justify-center space-x-4 items-center'>
          <img src={LocationIcon_02} alt='' />
          <p className='font-semibold'>Care Location</p>
        </div>
        <div className='flex justify-center items-center'>
          <button 
            className='pr-6 text-[14px]'
            onClick={() => setLocation("")}
          >
            Clear (1)
          </button>
          <img className='' src={DropDownIcon} alt='' />
        </div>
      </div>
      <p className='text-gray-600 text-[14px] py-2'>
        Location
      </p>
      <div className='relative w-full'>
        <input 
          className='border-[1px] p-2 border-[#9E77ED] rounded-lg text-gray-600 placeholder-gray-500 w-full px-4' 
          placeholder='Texas, 120322' 
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <div className='absolute right-2 top-3'>
          <img src={LocationIcon_01} alt='' className='w-4 h-4' />
        </div>
      </div>
    </div>
  )
}

export default CareLocation;