import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React,{useState} from 'react';
// import TodoForm from './components/TodoForm';
import {
  BrowserRouter,
  Route,
  Routes,

} from "react-router-dom";

function App() {
  const [mode, setMode ] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
       setMode ('dark')
       document.body.style.backgroundColor = 'black'
    
    }
    
    else{
      setMode ('light')
      document.body.style.backgroundColor = 'white'

    }
  }
  return (
<>
  
  {/* <TextForm heading="Enter text to analyze" upper="Convert to Uppercase" mode={mode}/> */}

      <BrowserRouter basename='/textutils'>
      <Navbar title="textutils"  aboutText="About" mode={mode} toggleMode={toggleMode}/>
 
    <div className='container my-3' >

        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>
          <Route exact path="/" element={<TextForm heading="Enter text to analyze" upper="Convert to Uppercase" mode={mode}/>}/>
        </Routes>
      </div>

    </BrowserRouter>

</>
  )
};

export default App;
