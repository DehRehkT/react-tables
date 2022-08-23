import './App.css';

function BoxContents () {
  return(
    <table className="styled-table">
      <thead>
        <tr>
          <th>#</th>
          <th>DPF Case</th>
          <th>CCID Label</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>MB3G-5F297-ABA52C7M315</td>
          <td>AQUAA222094B0028MB3G 5H270 BL</td>
        </tr>
        <tr>
          <td>2</td>
          <td>MB3G-5F297-ABA52C7M284</td>
          <td>AQUAA222094B0032MB3G 5H270 BL</td>
        </tr>
        <tr>
          <td>3</td>
          <td>MB3G-5F297-ABA52C7M316</td>
          <td>AQUAA222094B0031MB3G 5H270 BL</td>
        </tr>
        <tr>
          <td>4</td>
          <td>MB3G-5F297-ABA52C7M313</td>
          <td>AQUAA222094B0029MB3G 5H270 BL</td>
        </tr>
        <tr>
          <td>5</td>
          <td>MB3G-5F297-ABA52C7M299</td>
          <td>AQUAA222094B0021MB3G 5H270 BL</td>
        </tr>
        <tr>
          <td>6</td>
          <td>MB3G-5F297-ABA52C7M209</td>
          <td>AQUAA222094B0114MB3G 5H270 BL</td>
        </tr>                            
      </tbody>
    </table>  
  )
}

function App() {
  return (
    <div className="grid-container">
      <div className="main-container">
        <div className="heading">
          <h1 className="heading_title">Table In Card</h1>          
        </div>
        <div className="cards">
          <BoxContents />  
          <BoxContents /> 
          <BoxContents />    
          <BoxContents /> 
          <BoxContents /> 
          <BoxContents />                    
        </div>
      </div>  
    </div>
  );
}

export default App;
