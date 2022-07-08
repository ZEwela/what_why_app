import React, {useState} from 'react';
import '../App.css';
import {Base} from '../Base.js';
import {Boxes} from '../Boxes.js';
import {boxesNames} from '../utils.js';
import {Summary} from '../Summary.js';




function App() {
  const [userInput, setUserInput] = useState(''); 
  const [thougts, setThoughts] = useState([]);

  const handleChange = ({target}) => {
    setUserInput(target.value)
  } 

  const handleSubmit = () => {

    setThoughts((prev) => [...prev, userInput]);
    console.log(thougts);
  }

  return (
    <>
      <Base userInput={userInput} handleChange={handleChange}/>
      <Boxes boxesNames={boxesNames} handleSubmit={handleSubmit}/>
      <Summary thougts={thougts}/>
      
    </>
  );
}

export default App;
