import { useState } from 'react';
import './App.css'

function App() {
  const [arrayNames, setArrayNames] = useState([])

  const names = [
    'José',
    'Antonio',
    'Maria',
    'Fernanda',
    'Joana',
    'Francisco'
  ]

  const handleChange = (e) => {
    const filter = arrayNames.find(name => name === e.target.value)
    if(filter){
      setArrayNames(arrayNames.filter(name => name !== e.target.value))      
    } else {
      setArrayNames(oldArray => [...oldArray, e.target.value])
    }
  }

  return (
    <div className="App">
      <div className='Container'>
        <label>Selecione os nomes</label>
        <select onChange={handleChange} value={arrayNames} name='names' multiple size={5}>
          {
            names.map((name, index) =>
              <option key={index} value={name}>
                {name}
              </option>
            )
          }
        </select>
        <ul>
          {
            arrayNames.map(name => 
              <li>{name}</li>  
            )
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
