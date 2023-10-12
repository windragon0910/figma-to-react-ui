import UserAvatar from '../assets/icons/Avatar.svg';
import LogoIcon from '../assets/icons/Isometric_square.svg';
import LogoIcon_01 from '../assets/icons/logo_01.svg';
import NotificationIcon_01 from '../assets/icons/ntify.svg';
import NotificationIcon_02 from '../assets/icons/ntify_01.svg';

const Header = () => {
  return (
    <div className="bg-white px-4 shadow-md shadow-gray-100 py-3">
      <div className='flex justify-between items-center'>
        <div className="flex justify-center items-center">
          <div className='flex justify-center items-center'>
            <img src={LogoIcon} className='z-10'/>
            <img src={LogoIcon_01} className='translate-x-[-20px] translate-y-[8px]'/>
            <a href='#' className='font-bold pl-8 text-[20px] text-[#7F56D9]'>Logo</a>
          </div>
          <div className='translate-x-[200px] font-bold '>
            <button className='text-[#7F56D9]'>Home</button>
            <button className='text-gray-500 px-8'>My visits</button>
            <button className='text-gray-500'>My favourites</button>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <button>
            <img src={NotificationIcon_01} />
          </button>
          <button className='px-4'>
            <img src={NotificationIcon_02} />
          </button>
          <div className='flex justify-center items-center'>
            <div className='mr-2'>
              <img src={UserAvatar} className='w-12 h-12' />
            </div>
            <div className='flex flex-col just-start items-start'>
              <p className='font-bold text-[20px]'>Client Ryhe</p>
              <p className='text-gray-600 text-[16px] font-normal'>test@caredirect.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;