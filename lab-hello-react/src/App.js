import "./App.css";
import logo from "./images/ironhack.png";
import menu from "./images/menu.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <nav className="flex-row">
        <img src={logo} alt="ironhackLogo" />
        <img src={menu} alt="menuTopXs" />
      </nav>
      <div className="landing">
        <h1>Say hello to ReactJs</h1>
        <h3>
          You will learn how to use the most popular frontend library, and
          become a super Ninja developer
        </h3>
        <button> Awesome!</button>
      </div>
      <div className="flex-row">
        <div className="landing center">
          <img src={icon1} alt="que cosa" />
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs</p>
        </div>
        <div className="landing center">
          <img src={icon2} alt="que cosa" />
          <h3>Components</h3>
          <p>Build encapsulated Components that manage their state</p>
        </div>
        <div className="landing center">
          <img src={icon3} alt="que cosa" />
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components</p>
        </div>
        <div className="landing center">
          <img src={icon4} alt="que cosa" />
          <h3>JSX</h3>
          <p>Statically-typed designed to run on modern browsers</p>
        </div>
      </div>
    </div>
  );
}

export default App;
