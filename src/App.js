import React, { Component } from "react";
import "./css/App.css";

//Components
import { Eventslider } from "./Components/Eventslider";
import { Navigation } from "./Components/Navigation";
import { Footer } from "./Components/Footer";
import { MobileNavigation } from "./Components/Navigation/Mobile/MobileNavigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <Eventslider />
        <Navigation />
        <MobileNavigation />
        <Footer />
      </div>
    );
  }
}

export default App;
