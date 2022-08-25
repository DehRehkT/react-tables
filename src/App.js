import React, { useState } from 'react';

// Import components
import BoxContents from './components/box-contents/box-contents';
import Pagination from './components/pagination/pagination';

// Import Data
import finishedBoxesData from './data/finished-boxes-data';

import './App.css';

function App() {
   
   const [currentPage, setCurrentPage] = useState(1); // User is currently on this page    
   const [recordsPerPage] = useState(2); // No of Records to be displayed on each page   

   const indexOfLastRecord = currentPage * recordsPerPage;
   const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

   // Records to be displayed on the current page
   const currentRecords = finishedBoxesData.slice(indexOfFirstRecord, indexOfLastRecord);
   console.log(currentRecords);

   const nPages = Math.ceil(finishedBoxesData.length / recordsPerPage)   // Calculate the number of

  return (
    <div className="grid-container">
      <div className="main-container">
        <div className="heading">
          <h1 className="heading_title">Some Stuff</h1>          
        </div>
        <div className="cards">           
          {
            finishedBoxesData.map((boxContents, index) => {
              return(
                <BoxContents boxContents={boxContents} />   // Rename this to packed box later
              )            
            })           
          }
          
          <Pagination
            nPages = { nPages }
            currentPage = { currentPage } 
            setCurrentPage = { setCurrentPage }
          />                    
        </div>
      </div>  
    </div>
  );
}

export default App;
