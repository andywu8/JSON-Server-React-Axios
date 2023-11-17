
import PersonList from './components/PersonList';
import PersonAdd  from './components/PersonAdd';
import PersonRemove from './components/PersonRemove';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Axios Project</h1>
      </header>
      <PersonList/>
      <PersonAdd/>
      <PersonRemove/>

    </div>
  );
}

export default App;
