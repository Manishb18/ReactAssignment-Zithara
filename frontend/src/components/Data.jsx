import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SortBy from './SortBy';
import Table from './Table';
import Pagination from './Pagination';
import AddUserForm from './AddUserForm';
import '../App.css'
function Data() {
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [sortby, setSortby] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [addingUser, setAddingUser] = useState(false);
  const [addedUser, setAddedUser] = useState(false)
  const [newUserDetails, setNewUserDetails] = useState({
    username: '',
    age: '',
    phone: '',
    location: ''
  });

  useEffect(() => {
    async function fetchData(){
      try {
        const response = await axios.get(`http://localhost:3000/getUserData`);
        // console.log("Init : "+typeof(response.data))
        // console.log(response.data)
        const formattedData = response.data.map(item => ({
          ...item,
          created_at_date: new Date(item.created_at).toLocaleDateString(),
          created_at_time: new Date(item.created_at).toLocaleTimeString()
        }));
        setUserData(formattedData);
        setFilteredData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      finally{
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    function fetchData() {
      let curData = userData;
  
      const searchResult = curData.filter((item) =>
        item.username.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.location.toLowerCase().includes(searchValue.toLowerCase())
      );
  
    
      if (sortby && ['dateA', 'dateD', 'timeA', 'timeD'].includes(sortby)) {
        searchResult.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);
        const dateOnlyA = new Date(dateA.getFullYear(), dateA.getMonth(), dateA.getDate());
        const dateOnlyB = new Date(dateB.getFullYear(), dateB.getMonth(), dateB.getDate());
        console.log(dateOnlyA)
        console.log(dateOnlyB)

          if (sortby === 'dateA') {
            return dateOnlyA - dateOnlyB;
          } else if (sortby === 'dateD') {
            return dateOnlyB - dateOnlyA;
          } else if (sortby === 'timeA') {
            return dateA.getTime() - dateB.getTime();
          } else if (sortby === 'timeD') {
            return dateB.getTime() - dateA.getTime();
          }
          return 0;
        });
      }
      setFilteredData(searchResult);
    }
  
    fetchData();
  }, [searchValue, sortby, userData]);

function handleAddButtonClick(){
  setAddingUser(true)
}

return (
  <div>
    {addingUser ? (
      <div>
        <AddUserForm setAddingUser={setAddingUser} setUserData={setUserData} setAddedUser = {setAddedUser}/>
        {addedUser ? (
          <div className="flex justify-center text-green-600">
            <p>Succesfully added the user!!!</p>
          </div>
        ) : (<></>)}
      </div>
    ) : (
      <div>
        <div className='flex justify-between mb-4'>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-2' onClick={handleAddButtonClick}>AddUser</button>

          <SearchBar setSearchValue={setSearchValue} />
          <SortBy setSortby={setSortby}/>
        </div>
        {isLoading ? (
          <h3 className='font-mono flex justify-center text-2xl text-green-400'>Fetching User Data.....</h3>
        ) : (

          <Table userData={filteredData} pageNo={pageNo} />
        )}

        <Pagination pageNo={pageNo} setPageNo={setPageNo} userData={userData}/>

      </div>
    )}
  </div>
);
}

export default Data;