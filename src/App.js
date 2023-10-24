import './App.css';
import List from './components/List';
function App() {

  const meusItens = ['React','Vue','Angular']

  return (
    <div className="App">
      <h1>Renderização de listas</h1>
      <List itens={meusItens} />
      <List itens={[]}/>
    </div>
  );
}

export default App;
