// import './App.css';
// import Home from './Pages/Home';
// import EditDocs from './Pages/EditDocs';
// import { app,database } from './fireaseConfig';
// import { Route, Routes } from 'react-router-dom';

// function App() {
//   return (
//     <div className="App">
     
//        <Routes>
//          <Route path='/' element={<Home database={database}></Home>}></Route>
//          <Route  path="/editDocs/:id" element={<EditDocs database={database}/>} ></Route>
//        </Routes>
//     </div>
//   );
// }

// export default App;









// import './App.css';

// import { Routes, Route } from "react-router-dom";
// // import { app, database } from './firebaseConfig';

// // import EditDocs from './Pages/EditDocs';
// import { app, database } from './fireaseConfig';
// import DocEdit from './Pages/DocEdit';
// import Docs from './components/Docs';



// function App() {
//   return (
//     <Routes> 
//       <Route path="/" element={<Docs database={database} />} />
//       {/* <Route path="/editDocs/:id" element={<EditDocs database={database}/>} /> */}
//    {/* <Route path='/editDocs/:id' element={<EditDoc database={database}></EditDoc>}> </Route> */}
//    <Route path='/editDocs/:id' element= { <DocEdit database={database}/>}></Route>
//     </Routes>
    
//   );
// }


// export default App;





// ================================



import './App.css';
// import Home from './pages/Home';
// import { app, database } from './firebaseConfig';
import { Routes, Route } from "react-router-dom";
// import { Edit } from '@mui/icons-material';
import DocEdit from './Pages/DocEdit';
import Home from './Pages/Home';
import { app, database } from './fireaseConfig';
import Header from './components/Header';
import EditDocs from './Pages/DocEdit';

function App() {
  return (
    <div className="App">
    <Header></Header>
       <Routes>
         <Route path='/' element={<Home database={database}></Home>}></Route>
         {/* <Route  path="/editDocs/:id" element={<DocEdit database={database}/>} ></Route> */}
         <Route path='/editDocs/:id' element={<EditDocs database={database}></EditDocs>}></Route>
       </Routes>
    </div>
  );
}

export default App;