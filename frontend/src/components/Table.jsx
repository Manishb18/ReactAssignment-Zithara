import React from 'react';

function Table({ userData, pageNo }) {
  const startIndex = (pageNo - 1) * 20;
  const endIndex = startIndex + 20;
  const paginatedData = userData.slice(startIndex, endIndex);

  return (
    <div className='relative overflow-x-auto flex justify-center'>
    <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
        <tr>
          <th   className='px-6 py-3'>SNo</th>
          <th   className='px-6 py-3'>UserName</th>
          <th   className='px-6 py-3'>Age</th>
          <th   className='px-6 py-3'>Phone</th>
          <th   className='px-6 py-3'>Location</th>
          <th   className='px-6 py-3'>Created At Date</th>
          <th   className='px-6 py-3'>Created At Time</th>
        </tr>
      </thead>
      <tbody className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
        {paginatedData.map((item, index) => (
          <tr key={index}>
            <td className='px-6 py-3'>{startIndex + index + 1}</td>
            <td className='px-6 py-3'>{item.username}</td>
            <td className='px-6 py-3'>{item.age}</td>
            <td className='px-6 py-3'>{item.phone}</td>
            <td className='px-6 py-3'>{item.location}</td>
            <td className='px-6 py-3'>{item.created_at_date}</td>
            <td className='px-6 py-3'>{item.created_at_time}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default Table;
