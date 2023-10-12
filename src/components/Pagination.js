const Pagination = () => {
  return (
    <div>
      <nav className="isolate inline-flex -space-x-px mt-8 mb-8" aria-label="Pagination">
        <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-[#9E77ED] rounded-md px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-500  hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-500  hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-500  focus:outline-offset-0">...</span>
        <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-500  hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-500  hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
        <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-500  hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
      </nav>
    </div>
  )
}

export default Pagination;