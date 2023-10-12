import { useState } from "react";
import PersonItem from "./PersonItem";

import DropDownIcon from '../assets/icons/chevron-down.svg';
import Pagination from "./Pagination";

const Items = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Andi Lane',
      hourly: '18',
      text: "Hi My name's Andi, I can help with anything"
    },
    {
      id: 2,
      name: 'Andi Lane',
      hourly: '18',
      text: "Hi My name's Andi, I can help with anything"
    },
    {
      id: 3,
      name: 'Andi Lane',
      hourly: '18',
      text: "Hi My name's Andi, I can help with anything"
    },
    {
      id: 4,
      name: 'Andi Lane',
      hourly: '18',
      text: "Hi My name's Andi, I can help with anything from cleaning to taking care of your home and your beloved ones"
    }
  ]);

  const [current, setCurrent] = useState(1);


  return (
    <div className="w-full px-12 mt-4 shadow-md shadow-gray-100">
      <div className="flex justify-end items-center mb-16">
        <p className="pr-8 font-bold text-[20px]">Sort By</p>
        <div className="rounded-lg border-[2px] border-gray-300 shadow-sm shadow-gray-100 px-2 py-2.5 flex items-center">
          <p className="text-gray-500 font-semibold">Relevance</p>
          <img src={DropDownIcon} />
        </div>
      </div>
      <div>
        {
          items.map((item) => (
            <PersonItem 
              key={item.id}
              name={item.name} 
              hourly={item.hourly} 
              text={item.text} 
              isSelected={current == item.id ? true : false}
              setCurrent={setCurrent}
              id={item.id}
            />
          ))
        }
      </div>
      <div className="border-t-[1px] border-gray-200 mt-12 flex justify-center items-center ">
        <Pagination />
      </div>
    </div>
  )
}

export default Items;