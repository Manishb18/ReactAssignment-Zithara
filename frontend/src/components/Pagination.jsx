import React from 'react';

function Pagination({ pageNo, setPageNo, userData }) {
  const totalPages = Math.ceil(userData.length / 20);
  const handlePageChange = (pageNumber) => {
    setPageNo(pageNumber);
  };
  return (
    <div className='flex justify-center mt-5 gap-2'>
      {Array.from({ length: totalPages }, (_, index) => (
        <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${pageNo === index + 1 ? 'bg-blue-500 text-white' : ''}`}>
          {index + 1}
        </button>
      ))}
    </div>
  );
}
export default Pagination;
