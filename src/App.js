/* eslint-disable no-unused-vars */

import './App.css';
import './components/Navegation-Bar/Navbar';
import NavegationBar from './components/Navegation-Bar/Navbar';
import BodyLogo from './components/Body-Logo/Bodylog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavegationBar/>
       <BodyLogo/>
      </header>
    </div>
  );
}

export default App;
