import { useState, useEffect } from 'react';
import getStarShips from './services/starWars';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';





export default function App() {

  const [starShips, setStarShips] = useState([]);

  const getData = async () => {
    let data = await getStarShips();
    setStarShips(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(starShips);

  const renderStarShips = starShips.map((shipName, index) => {
    return <Card key={index} name={shipName.name}/>
  })

 
  return (
    <div className="App">
      <Header/>
      {renderStarShips}
    </div>
  );
}


