import { useState } from "react";
import ReactPaginate from "react-paginate";

import PersonItem from "./PersonItem";
import Pagination from "./Pagination";
import SortBox from "./SortBox";
import CustomHeader from "../layouts/Header";

const fakeItems = [
  {
    id: 1,
    name: 'Andi Lane',
    hourly: '20',
    text: "Hi My name's Andi, I can help with anything"
  },
  {
    id: 2,
    name: 'Maxim',
    hourly: '18',
    text: "Hi My name's Andi, I can help with anything"
  },
  {
    id: 3,
    name: 'Khalid',
    hourly: '16',
    text: "Hi My name's Andi, I can help with anything"
  },
  {
    id: 4,
    name: 'Antonio',
    hourly: '13',
    text: "Hi My name's Andi, I can help with anything from cleaning to taking care of your home and your beloved ones"
  },
  {
    id: 5,
    name: 'Bntonio',
    hourly: '30',
    text: "Hi My name's Andi, I can help with anything from cleaning to taking care of your home and your beloved ones"
  },

  {
    id: 6,
    name: 'Cntonio',
    hourly: '24',
    text: "Hi My name's Andi, I can help with anything from cleaning to taking care of your home and your beloved ones"
  },
  {
    id: 7,
    name: 'Dntonio',
    hourly: '50',
    text: "Hi My name's Andi, I can help with anything from cleaning to taking care of your home and your beloved ones"
  },
  {
    id: 8,
    name: 'Entonio',
    hourly: '43',
    text: "Hi My name's Andi, I can help with anything from cleaning to taking care of your home and your beloved ones"
  },
  {
    id: 9,
    name: 'Fntonio',
    hourly: '19',
    text: "Hi My name's Andi, I can help with anything from cleaning to taking care of your home and your beloved ones"
  },
  {
    id: 30,
    name: 'Gntonio',
    hourly: '13',
    text: "Hi My name's Andi, I can help with anything from cleaning to taking care of your home and your beloved ones"
  },
  {
    id: 11,
    name: 'Hntonio',
    hourly: '64',
    text: "Hi My name's Andi, I can help with anything from cleaning to taking care of your home and your beloved ones"
  },
  {
    id: 12,
    name: 'Intonio',
    hourly: '33',
    text: "Hi My name's Andi, I can help with anything from cleaning to taking care of your home and your beloved ones"
  },
  {
    id: 13,
    name: 'Kntonio',
    hourly: '29',
    text: "Hi My name's Andi, I can help with anything from cleaning to taking care of your home and your beloved ones"
  },
  {
    id: 14,
    name: 'Lntonio',
    hourly: '27',
    text: "Hi My name's Andi, I can help with anything from cleaning to taking care of your home and your beloved ones"
  },
  {
    id: 15,
    name: 'Gntonio',
    hourly: '47',
    text: "Hi My name's Andi, I can help with anything from cleaning to taking care of your home and your beloved ones"
  }
];

const DisplayingItems = ({
  currentItems,
  current,
  setCurrent
}) => {
  return (
    <div>
      {
        currentItems.map((item) => (
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
  )
}

const Items = () => {



  const [items, setItems] = useState(fakeItems);
  const [current, setCurrent] = useState(1);

  // for sort
  const [sortItems, setSortItems] = useState([
    {
      id: 1,
      label: 'Relevance',
      name: 'relevance'
    },
    {
      id: 2,
      label: 'Name',
      name: 'name'
    },
    {
      id: 3,
      label: 'Hourly',
      name: 'hourly'
    }
  ])
  const [sortBy, setSortBy] = useState("Relevance");


  // for pagination
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const itemsPerPage = 5;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


  /**
   * @desc handling the sort...
   */
  const handleSort = (item) => {
    setSortBy(item);

    let sortedItems;
    if (item === "Name") {
      sortedItems = [...items].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });

    }
    if (item === "Hourly") {
      sortedItems = [...items].sort((a, b) => {
        const hourlyA = a.hourly * 1;
        const hourlyB = b.hourly * 1;

        if (hourlyA < hourlyB) {
          return 1;
        }
        if (hourlyA > hourlyB) {
          return -1;
        }
        return 0;
      });
    }

    if (item === "Relevance") {
      sortedItems = fakeItems;
    }

    setItems(sortedItems);
    sortedItems = null;
  }

  return (
    <div className="w-full lg:px-12 mt-4 shadow-md shadow-gray-100">
      <div className="flex justify-end items-center mb-16">
        <p className="pr-8 font-bold text-[20px]">Sort By</p>
        <SortBox
          sortItems={sortItems}
          sortBy={sortBy}
          setSortBy={handleSort}
        />
      </div>
      <div>
        <DisplayingItems
          currentItems={currentItems}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
      <div className="border-t-[1px] border-gray-200 mt-12 flex justify-center items-center ">
        <ReactPaginate
          breakLabel="..."
          nextLabel={null}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={null}
          renderOnZeroPageCount={null}
          className="flex space-x-6 mt-4"
          pageClassName="flex justify-center items-center"
          activeClassName="bg-[#9E77ED] w-8 h-8 rounded-md flex justify-center items-center text-white"
        />
      </div>
    </div>
  )
}

export default Items;