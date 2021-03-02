import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Coordinates from './components/Coordinates';
import MyMap from './components/MyMap'; 
import { useState,useEffect } from 'react';


function App() {

  const [inputs,setinputs] = useState([]);
  const handleInputs = (e) => {
    setinputs([...inputs,e]);
  }

  useEffect(()=>{
      console.log("Inputs from App.js",inputs);
  },[inputs]);
 

  return (
    <div className="container">
      <Header handleInputs={handleInputs}/>
      <div className="myDiv">
        <Coordinates inputCoords={inputs}/>
        <MyMap coords={inputs}/>
      </div>
    </div>
  );
}

export default App;
