import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Herosection from "./components/Herosection";
import "./style/LandingPage.css";

function App() {
  return (
    <div>
      <div className="shadow-sm bg-body rounded">
        <NavigationBar />
      </div>
      <Herosection />
    </div>
  );
}

export default App;
