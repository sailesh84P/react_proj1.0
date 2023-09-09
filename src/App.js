// import logo from './logo.svg';
import './App.css';
import Person from './Components/Person/Person';
import Man from './Components/Man';
import FunctionalComp from './Components/FunctionalComp';
import Name from './Components/Name';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <FunctionalComp srno="1" />
        <Name company="Kolkata" name="Sailesh Kumar Paul" />
        <FunctionalComp srno="2" />
        <Name company="Mumbai"  name="Ganesh Tota" />
        <FunctionalComp srno="3" />
        <Name company="Pune" name="Diksha Harami" /> */}
        <Person/>
        {/* <Man/> */}
        {/* <FunctionalComp/> */}
      </header>
    </div>
  );
}

export default App;
