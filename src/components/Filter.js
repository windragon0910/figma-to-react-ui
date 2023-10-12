import CloseIcon from '../assets/icons/close/x-close.svg';
import FiltersIcon from '../assets/icons/filter/filter-lines.svg';
import CardType from './CardType';
import CareFrequency from './CareFrequency';
import CareLocation from './CareLocation';
import CarePricing from './CarePricing';
import CareSchedule from './CareSchedule';
import CareSeeking from './CareSeeking';

import SearchBar from "./SearchBar";

const Filter = () => {
  return (
    <div className="mr-8 pt-4 mt-2">
      <SearchBar />
      <div className='flex justify-between items-center mt-4'>
        <button className='rounded-lg border-[2px] border-gray-300 shadow-sm shadow-gray-100 flex justify-center items-center bg-white px-2 py-1 font-semibold text-gray-700'>
          <img src={FiltersIcon} alt=''/>
          <p className='pl-2'>Filters</p>
        </button>
        <button className='rounded-lg border-[2px] border-gray-300 shadow-sm shadow-gray-100 flex justify-center items-center bg-white px-2 py-1 font-semibold text-gray-700'>
          <p className='pr-2'>Clear App</p>
          <img src={CloseIcon} alt=''/>
        </button>
      </div>

      {/* Card Type */}
      <CardType />

      {/* Care Frequency */}
      <CareFrequency />

      {/* Care Location */}
      <CareLocation />
      
      {/* Care Schedule */}
      <CareSchedule />

      {/* Care Pricing */}
      <CarePricing />

      {/* Care Seeking */}
      <CareSeeking />
    </div>
  )
}

export default Filter;