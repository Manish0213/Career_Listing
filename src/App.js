// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
import DropdownLocation from "./DropdownLocation";
import DropdownPosition from "./DropdwonPosition";
import DropdownContainer from "./DropdownContainer";
import Card from "./Card";
import CardList from "./CardList";

function App() {
  const [selectedLocation, setSelectedLocation] = useState("position");
  const [selected, setSelected] = useState("location");
  const [cardData,setCardData] = useState([{role: "Manager", description: "Lead the initiation and planning of a project and ensure technical feasibility. Ensure resource availability and allocation", location: "London", date: "01 October 2023"},{role: "Hubspot Developer", description: "Lead the initiation and planning of a project and ensure technical feasibility. Ensure resource availability and allocation", location: "Washington", date: "01 October 2023"},{role: "Wordpress Developer", description: "Lead the initiation and planning of a project and ensure technical feasibility. Ensure resource availability and allocation", location: "Amsterdam", date: "01 October 2023"}]);
  
  const [showCardData, setShowCardData]  = useState(cardData);

  return (
    <>
    <DropdownContainer selected = {selected} setSelected={setSelected} selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation} setCardData={setCardData} cardData={cardData} showCardData={showCardData} setShowCardData={setShowCardData} /> 
    <CardList showCardData={showCardData}/>
    </>
  );
}

export default App;
