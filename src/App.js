import './App.css';
import CardList from './Components/CardList/CardList';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import {useState} from 'react';

function App() {
  const [filter, setFilter] = useState("")

  return (
    <div className="App">
     
     <SideBar  setFilter={setFilter}/>
     
     <Header/>
     
    
     <CardList filter={filter}/>
    </div>
  );
}

export default App;
