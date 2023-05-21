import React, {useState} from 'react'

export default function TextForm(props) {
   const handleUpclick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase","success");

    }

    const handleLoclick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to Lowercase","success");
    
      }
      
      const handleCopy = ()=>{
        var text = document.querySelector('#myBox');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied To clipboard","success");
      }
      
      const cleartext = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = "";
        setText(newText);
        props.showAlert("cleared text","success");
        
      }
      
      
    const handleOnChange = (event)=>{
        setText(event.target.value);

    }
    const[text,setText] = useState('');
    // text ="newText"; // Wrong way to change State
  return (
    <>
    <div>
        <h1 style={{color:props.mode==='dark'?'white':'#042743'}}>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0}  className="btn btn-primary " onClick={handleUpclick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-success mx-2" onClick={handleLoclick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-warning mx-2 my-2" onClick={handleCopy}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-danger mx-2" onClick={cleartext}>Clear Text</button>
  </div>
  <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split( " ").length-1} words</p>
    <p>{text.length} characters</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something To Preview it here......."}</p>
  </div>
  </>
  )
}
