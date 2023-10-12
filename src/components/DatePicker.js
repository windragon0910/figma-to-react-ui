import DatePicker from 'react-datepicker'
import CalenderIcon from '../assets/icons/schedule/calendar.svg';
import CalenderIcon_01 from '../assets/icons/schedule/calendar_01.svg';
import 'react-datepicker/dist/react-datepicker.css'
import { useState } from 'react';

const CustomDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState("");
    return (
        <div className='w-full relative mt-2'>
            <DatePicker
                selected={selectedDate}
                onChange={setSelectedDate}
                dateFormat="dd/MM/yyyy" 
                placeholderText="10/08/2023"
                className="border-[1px] border-[#9E77ED] px-4 text-gray-600 bg-white w-[240px] lg:w-[310px] rounded-md py-2 text-[14px]  focus:outline-none focus:border-blue-500 placeholder:text-gray-500"
            />
            <div className='absolute top-3 right-2'>
                <img src={CalenderIcon_01} alt='' className='w-4 h-4' />
            </div>
        </div>
    )
}

export default CustomDatePicker