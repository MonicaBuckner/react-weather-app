
import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className="container">
    
     <Weather defaultCity="Seattle"/>
     <footer> 
       <a href="https://github.com/MonicaBuckner/react-weather-app" target="_blank" rel="noreferrer">
          Open-sourced code{" "}
        </a>
        by{" "}
        <a href="https://www.linkedin.com/in/monica-buckner/" target="_blank" rel="noreferrer">
          Monica Buckner
        </a>
    </footer>
    </div>
    </div>
  );
}
