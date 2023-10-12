import CalenderIcon_01 from '../assets/icons/schedule/calendar_01.svg';

const Calender = () => {
  return (
    <div className='relative w-full mt-2'>
      <input className='border-[1px] p-2 border-[#9E77ED] rounded-lg placeholder-gray-500 w-full' placeholder='10/08/2023' />
      <div className='absolute right-2 top-3'>
        <img src={CalenderIcon_01} className='w-4 h-4' />
      </div>
    </div>
  )
}

export default Calender;