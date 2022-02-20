import './App.css';
import CardList from './Components/CardList/CardList';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';
import {useState, useEffect} from 'react';

function App() {
  const [filter, setFilter] = useState([])
  const [filteredData, setFilteredData] = useState("")

  
const handleChange =(e)=>{
   console.log(e.currentTarget.value)
  if(e.currentTarget.checked){
    
     setFilter(filter.push(e.currentTarget.value))
 
      console.log(filter)
     
      
  } else{
     
  const targetIndex = filter.indexOf(e.currentTarget.value);
    filter.splice(targetIndex,1);
      console.log(filter)
         
  }
  setFilteredData(filter.join())
}
console.log(filteredData)

  return (
    <div className="App">
     
     <SideBar handleChange={handleChange} />
     
     <Header/>
     
     <CardList filteredData={filteredData}/>
    </div>
  );
}

export default App;
