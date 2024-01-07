import React,{useState} from 'react';


export default function TextForm(props) {
   const handleUpClick=()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    }
  
    const handlelowClick=()=>{
      console.log("lowercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText);
      }

    const clearText=()=>{
      let newText = "Enter text here";
      setText(newText);
    }
   
   const handleOnChange=(event)=>{
    setText(event.target.value);
   }

  const[text, setText] = useState('Enter text here');

  return (
    <>
    <div className='container'style={{color: props.mode === 'dark'?'white':'black'}} >
    <h1>{props.heading}</h1>
  <div className="form-floating">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{height: '100px', color: props.mode === 'dark'?'white':'black' ,backgroundColor: props.mode === 'dark'?'black':'white'}}  rows='8'/> 
  </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>{props.upper}</button>
    <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={clearText}>Clear</button>
    

  </div>
  <div className='container' style={{color: props.mode === 'dark'?'white':'black'}}>

    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters </p>
    <p>{0.008 * text.split(" ").length } Minutes to read with speed of 125 wpm</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  
  </>
  )
}
