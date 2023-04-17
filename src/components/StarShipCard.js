import { useState, useEffect } from "react";
import getStarShips from "../services/starWars";

export default function GetAllStarships() {
  const [starShips, setStarShips] = useState([]);

  const getData = async () => {
    let data = await getStarShips();
    setStarShips(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const showStarShips = () => {
    return starShips.map((item, index) => (
      <button className="star-ship" key={index}>
        {item.name}
      </button>
    ));
  };

  return <>{showStarShips()}</>;
}
