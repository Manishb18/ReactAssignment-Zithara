import React, { useState } from 'react';
import axios from 'axios';

function AddUserForm({ setAddingUser, setUserData, setAddedUser}) {
  const [newUserDetails, setNewUserDetails] = useState({
    username: '',
    age: '',
    phone: '',
    location: ''
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewUserDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/addUser', newUserDetails);
      const newUserData = response.data.newUserData;

      const newFormattedData = {
        ...newUserData,
        created_at_date: new Date(newUserData.created_at).toLocaleDateString(),
        created_at_time: new Date(newUserData.created_at).toLocaleTimeString()
      };

      setNewUserDetails({
        username: '',
        age: '',
        phone: '',
        location: ''
      });
      setUserData(prevUserData => [...prevUserData, newFormattedData]);
      setAddedUser(true)
    } catch (e) {
      console.log("Error occurred : " + e)
    }
  }

  function handleGoBack(){
    setAddingUser(false);
    setAddedUser(false);
  }
  return (
    <div className='flex justify-center'>
      <div className="w-full max-w-xs">
        <div className='flex justify-center font-mono text-2xl font-medium'>
            <h2>Add User</h2>
        </div>
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4' onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Username:
              <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="username" value={newUserDetails.username} onChange={handleInputChange} />
            </label>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Age:
              <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type='number' name="age" value={newUserDetails.age} onChange={handleInputChange} />
            </label>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Phone:
              <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="phone" value={newUserDetails.phone} onChange={handleInputChange} />
            </label>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>
              Location:
              <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" name="location" value={newUserDetails.location} onChange={handleInputChange} />
            </label>
          </div>
          <div className='flex items-center justify-between'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type="submit">Submit</button>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={handleGoBack}>Go Back</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUserForm;
