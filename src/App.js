import GetAllStarships from './components/StarShipCard';
import './App.css';
import Header from './components/Header';



export default function App() {
  return (
    <div className="App">
      <Header/>
      <GetAllStarships />
    </div>
  );
}


