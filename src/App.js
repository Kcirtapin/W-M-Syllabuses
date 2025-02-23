import logo from './logo.svg';
import './App.css';
import samplePDF from "./syllabuses/CSCI_243_Spring_2025_Davis.pdf";
import Syllabus from "./Syllabus";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href={samplePDF}
          target="_blank"
          rel="noopener noreferrer"
        >
          Test PDF  
        </a>
        <Syllabus name={samplePDF}/>
      </header>
    </div>
  );
}

export default App;
