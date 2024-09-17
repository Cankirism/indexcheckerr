import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { Router,Route,Routes} from "react-router-dom"
import Faq from './Components/Faq';

function App() {
  return (
    <Routes>
    
      <Route path="/" element={<Main/>} />
      <Route  path="/faq"  element={<Faq/>}/>

     
      
     
    </Routes>
   
  );
}

export default App;
