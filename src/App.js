
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
   
    <Navbar title="TextUtils"  aboutText={"about"}/>
    <div className="container my-3">
    {/* <switch>
      <Route path="/about">
        <about />
        
      </Route>
      <Route path="/">
     
      </Route>
    </switch> */}
    <TextForm heading="Enter text to analyze below"/>
    </div>
   
    </> 
  );
}

export default App;
