import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navigation from "./components/Navigation";
import Middle from "./components/Middle";
import Banner from "./components/Banner";
import FooterCont from "./components/FooterCont";
import UnderHeaderComp from "./components/UnderHeaderComp";

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <UnderHeaderComp/>
      <Navigation/>
      <Middle/>
      <Banner/>
      <FooterCont/>
  </div>
  );
}

export default App;
