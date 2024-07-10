// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState([]);

// useEffect(() => {
//   const fetchData = async () => {
//     try {
//       const response = await axios.get('mongodb+srv://MedLinkUser1234:9fAc8oj1iqquFVmp@cluster0.9hkyugv.mongodb.net/');
//       console.log('Response from backend:', response.data); // Log response data
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data', error);
//     }
//   };

//   fetchData();
// }, []);

//   return (
//     <div className="App">
//       <h1>Data from MongoDB</h1>
//       <h2>Items:</h2>
//       <ul>
//         {data.map((item) => (
//           <li key={item._id}>{item.name}</li>
//         ))}
//       </ul>
//       <h1>End of the list</h1>
//     </div>
//   );
// }

// export default App;
import "./App.css"
import React from 'react';
import ScanPage from "./Search Pages/SearchScansPage.jsx";
import ScanResultsPage from "./Search Pages/ScansResultPage.jsx";
import TestPage from "./Search Pages/SearchTestsPage.jsx";
 

import MedicinePage from "./Search Pages/SearchMedicinePage.jsx";
// import MedicinePage from "./Searcg Pages/SearchMedicinePage.jsx";

import ProductPage from "./Pages/product.jsx"

const App = () => {

  return(
    <div>
      {/* <MedicinePage/> */}
      {/* <ScanResultsPage/> */}
      {/* <ScanPage/> */}
      {/* <TestPage/> */}
     {/* <MedicinePage/> */}
     <ProductPage/>

    
     
    </div>


    
  );



};

export default App; 