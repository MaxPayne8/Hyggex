import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Faq from "./components/Faq";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Faq />
    </div>
  );
}

export default App;
