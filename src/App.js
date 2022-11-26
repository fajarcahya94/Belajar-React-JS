import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Herosection from "./components/Herosection";
import Content from "./components/Content";
import "./style/LandingPage.css";

function App() {
  return (
    <div>
      <div className="shadow-sm bg-body rounded">
        <NavigationBar />
      </div>
      <div>
        <Herosection />
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
}

export default App;
