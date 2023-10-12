import DropDownIcon from '../assets/icons/chevron-down.svg';
import HomeIcon from '../assets/icons/home-line.svg';

const CareFrequency = () => {
  return (
    <div className='flex justify-between bg-white rounded-md py-3 px-2 mt-2'>
      <div className='flex justify-center items-center'>
        <img src={HomeIcon} />
        <p className='pl-4 font-semibold text-gray-900'>Care Frequency</p>
      </div>
      <img src={DropDownIcon} />
    </div>
  )
}

export default CareFrequency;