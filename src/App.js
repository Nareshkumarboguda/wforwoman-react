import './App.css';
import Cardlist from './Components/CardList/Cardlist';
import Header from './Components/Header/Header';
import SideBar from './Components/SideBar/SideBar';

function App() {
  return (
    <div className="App">
     <Header/>
     <Cardlist/>
     <SideBar/>
     
    </div>
  );
}

export default App;
