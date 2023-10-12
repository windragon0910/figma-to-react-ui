import LancerIcon from '../assets/icons/items/lancer.svg';
import PlusIcon from '../assets/icons/items/plus.svg';
import StarsIcon from '../assets/icons/items/stars.svg';

const PersonItem = ({ name, hourly, text, isSelected, setCurrent, id }) => {
  return (
    <div 
      className={` ${isSelected ? 'bg-[#D6BBFB] bg-opacity-[27%] border-[1px] border-[#7F56D9]' : 'bg-[#EAECF0] bg-opacity-[68%]'} rounded-lg p-2 mt-4 w-full flex justify-start items-center w-full relative hover:cursor-pointer`}
      onClick={() => setCurrent(id)}
    >
      <div className='min-w-[100px]'>
        <img src={LancerIcon}  alt=''/>
      </div>
      <div className='flex flex-col justify-start items-start ml-8'>
        <div>
          <p className='font-bold text-[24px]'>{name}</p>
          <div className='my-2 flex flex-col items-start lg:flex-row lg:items-center justify-start'>
            <div className='flex justify-center items-end '>
              <p className='font-bold text-[24px]'>${hourly}/</p>
              <p className='font-bold'>Hr</p>
            </div>
            <div className='lg:translate-x-[100px]'>
              <img src={StarsIcon} alt=''/>
            </div>
          </div>
          <p>{text}</p>
        </div>
      </div>
      <div className={`${isSelected ? 'absolute right-0 bg-[#7F56D9] h-full rounded-r-md w-[80px] flex justify-center items-center' : 'hidden'}`}>
        <img src={PlusIcon} alt=''/>
      </div>
    </div>
  )
}

export default PersonItem;