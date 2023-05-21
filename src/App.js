import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import AboutUs from './components/AboutUs';

import React , {useState} from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Routes
} from "react-router-dom";


function App() {
  const[mode, setMode] = useState('light');
  
  const[alert, setalert]=useState(null);

  const showAlert = (message,type)=>{
    setalert({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setalert(null);
    },1500);

  }
  
  const toggleMode =()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been Enabled","success");
}
else{
  setMode('light');
  document.body.style.backgroundColor = 'white';
  showAlert("Light Mode has been Enabled","success");
}

  }
  return (
<>
<Router>
<Navbar title="TextUtil3" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path="/About"element={<AboutUs/>}/>
          <Route exact path="/"element={<TextForm heading="Enter Any Text To Analyze Below" mode={mode} showAlert={showAlert}/>}/>
          {/* <TextForm heading="Enter Any Text To Analyze Below" Color="yellow" mode={mode} showAlert={showAlert}/> */}
        </Routes>
        </div>
        </Router>
</>
  );
}

export default App;
