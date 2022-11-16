import React, { useState } from 'react'

export default function TextForm(props){
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleLoClick = ()=>{
        //console.log("Uppercase was clicked"+text);
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const handleClearClick = ()=>{
      //  console.log("Uppercase was clicked"+text);
        let newtext='';
        setText(newtext);
    }
    const handleOnchange =(event)=>{
        
        setText(event.target.value)
    }
    const handleCopy = () => {
        console.log("i am copy");
        var text = document.getElementById("myBox");
        text.querySelectorAll();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpace = ()=>{
        //  console.log("Uppercase was clicked"+text);
          let newtext=text.split(/[ ]+/);
          setText(newtext.join(" "));
      }
    const [text, setText]= useState('');
    
    return(
        <>
        <div className="container">
            <h1>
                {props.heading}
            </h1>
            <div className="mb-3">
             
                <textarea className ="form-control" value={text} onChange={handleOnchange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3">
            <h1> your text summary</h1>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p>
            {0.008*text.split(" ").length} minutes to read this
            </p>
            <h2> Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}