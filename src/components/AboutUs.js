import React, { useState } from 'react'

export default function AboutUs() {

  const [mystyle,setmystyle]= useState({
    color:'#042743',
    backgroundColor:'white'
  })

  const [btntext, setbtntext]=useState("Enable Dark Mode")
  
const toggleStyle =()=>{
    if(mystyle.color === 'black'){
      setmystyle({
        color:'white',
        backgroundColor:'#042743',
        border:'1px solid white'
      })
      setbtntext("Enable Light Mode")
    }
    else{
    setmystyle({
      color:'black',
      backgroundColor:'white'
    })
    setbtntext("Enable Dark Mode");
  }
  }
  return (
    <div className="container" style={mystyle}>
      <h1 className="my-3">About Us</h1>
    <div><div className="accordion accordion-flush" id="accordionFlushExample" style={mystyle}>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
         <strong>Accordion Item #1</strong>
        </button>
      </h2>
      <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <strong>Accordion Item #2</strong>
        </button>
      </h2>
      <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <strong>Accordion Item #3</strong>
        </button>
      </h2>
      <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
      </div>
    </div>
    </div>
  </div>
  <div className="container my-3">
    <button type="button" onClick={toggleStyle} className="btn btn-primary">{btntext}</button>
  </div>
  </div>
  )
}
