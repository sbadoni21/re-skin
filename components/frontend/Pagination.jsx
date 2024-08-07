import React from 'react';

const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center space-x-2 text-black ">
        {pageNumbers.map(number => (
          <li key={number} className="cursor-pointer">
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-1 rounded-full ${currentPage === number ? 'bg-blue-500 text-black' : 'bg-gray-200 text-black'}`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
