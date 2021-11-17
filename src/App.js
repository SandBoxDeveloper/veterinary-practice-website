import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {

  const [petList, setPetList] = useState([])

  useEffect(() => {
    fetch("http://0.0.0.0:8080/pets")
    .then(response => response.json())
    .then(data => setPetList(data ))
  },[])

  return (
    <div className="App">
      <b>List of Pets</b>
      {petList.map((pet)=> <div>{ `Pet name is: ${pet.name} with id: ${pet.id}` }</div>)}
    </div>
  );
}

export default App;
