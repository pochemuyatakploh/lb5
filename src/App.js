import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from "./components/Navigation";
import Middle from "./components/Middle";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navigation/>
      <Middle/>
      <Banner/>
      
    </div>
  );
}

export default App;
