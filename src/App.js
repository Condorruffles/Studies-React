import { useState } from 'react';
import './App.css';
import List from './components/List';
function App() {
  const [nome,setNome] = useState()
  return (
    <div className="App">
      <h1>State lift</h1>
      <List setNome={setNome} />
      {nome &&(
        nome === 'Raphael'? (
          nome + " é muito foda!"
        ):(
          nome + " dá o boga"
        )
      )}
    </div>
  );
}

export default App;
