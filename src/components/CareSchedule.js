import DropDownIcon from '../assets/icons/chevron-down.svg';
import CalenderIcon from '../assets/icons/schedule/calendar.svg';
import Calender from './Calender';
import CustomDatePicker from './DatePicker';
import CustomSlider from './Slider';

const CareSchedule = () => {
  return (
    <div className="flex flex-col justify-start items-start rounded-md bg-white pt-4 pb-2 px-2 mt-2 h-[270px]">
      <div className='text-[#9E77ED] w-full flex justify-between items-center'>
        <div className='flex justify-center space-x-4 items-center'>
          <img src={CalenderIcon} alt='' />
          <p className='font-semibold'>Care Schedule</p>
        </div>
        <div className='flex justify-center items-center'>
          <p className='pr-6 text-[14px]'>Clear (3)</p>
          <img className='' src={DropDownIcon} alt='' />
        </div>
      </div>
      <p className='text-gray-600 text-[14px] pt-2 '>
        Dates
      </p>
      <CustomDatePicker />
      <CustomDatePicker />
      <p className='text-gray-600 text-[14px] pt-2'>
        Times
      </p>
      <CustomSlider />
    </div>
  )
}

export default CareSchedule;