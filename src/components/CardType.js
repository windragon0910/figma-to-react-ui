import DropDownIcon from '../assets/icons/chevron-down.svg';
import HomeIcon from '../assets/icons/home-line.svg';

const CardType = () => {
  return (
    <div className='flex justify-between bg-white rounded-md py-3 px-2 mt-4'>
      <div className='flex justify-center items-center'>
        <img src={HomeIcon} />
        <p className='pl-4 font-semibold text-gray-600'>Card Type</p>
      </div>
      <img src={DropDownIcon} />
    </div>
  )
}

export default CardType;