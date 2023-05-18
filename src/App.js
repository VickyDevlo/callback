import { useState } from 'react';
import ChildComponent from './components/ChildComponent';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState("");

  //callback function to get data from child.
  const getBgColor = (bgclr) => {
    setBgColor(bgclr);
  };
  
  return (
    <div className="App">
      <h1>Passing data from child to parent</h1>
      <div
        className="Box_Wrapper"
        style={{
          border: `1px solid ${bgColor}`,
          backgroundColor: `${bgColor}`
        }}
      />
       <ChildComponent getBgColor={getBgColor} bgColor={bgColor}/>
    </div>
  );
}

export default App;
