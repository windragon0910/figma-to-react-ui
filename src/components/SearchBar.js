import SearchIcon from '../assets/icons/search/search_icon.svg';

const SearchBar = () => {
  return (
    <div className='relative'>
      <input 
        className='rounded-lg border-[2px] pl-10 border-gray-300 shadow-sm w-full text-gray-600 shadow-gray-100 px-2 py-2.5 w-[350px]' 
        placeholder='Search'
      />
      <div className='absolute top-0 bottom-0 my-auto left-4 flex justify-center items-center'>
        <img src={SearchIcon} alt=''/>
      </div>
    </div>
  )
}

export default SearchBar;