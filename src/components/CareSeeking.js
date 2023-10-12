import DropDownIcon from '../assets/icons/chevron-down.svg';
import SeekingIcon from '../assets/icons/seeking/seeking.svg';

const CareSeeking = () => {
  return (
    <div className='flex justify-between bg-white rounded-md py-3 px-2 mt-4'>
      <div className='flex justify-center items-center'>
        <img src={SeekingIcon} />
        <p className='pl-4 font-semibold text-gray-600'>Care Seeking</p>
      </div>
      <img src={DropDownIcon} />
    </div>
  )
}

export default CareSeeking;