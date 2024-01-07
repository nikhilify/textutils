import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React,{useState} from 'react';
// import TodoForm from './components/TodoForm';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

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
  <Navbar title="textutils"  mode={mode} toggleMode={toggleMode}/>
  
  <div className='container my-3' >
  <TextForm heading="Enter text to analyze" upper="Convert to Uppercase" mode={mode}/>
  </div>

    {/* <About mode={mode}></About> */}
        {/* <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter text to analyze" upper="Convert to Uppercase" mode={mode}/>}>

          </Route>
        </Routes>
    </Router> */}
</>
  )
};

export default App;
