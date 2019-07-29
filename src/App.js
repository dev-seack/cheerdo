import React, { Component } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import { Eventslider } from "./Components/Eventslider";
import { Navigation } from "./Components/Navigation";
import { Footer } from "./Components/Footer";
import { MobileNavigation } from "./Components/Navigation/Mobile/MobileNavigation";
import { Home } from "./Pages/home";
import { Probetraining } from "./Pages/probetraining";
import { NewsOverview } from "./Pages/news";
import { Article } from "./Components/Blog/Article";
import { NotFound } from "./Pages/NotFound";
import { ScrollToTopController } from "./Components/hoc/ScrollToTop";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Eventslider />
          <Navigation />
          <MobileNavigation />
          <Switch>
            <Route exact component={Home} path="/" />
            <Route exact component={Home} path="/startseite" />
            <Route exact component={NewsOverview} path="/news" />
            <Route exact component={Probetraining} path="/probetraining" />
            <Route exact path="/article/:articleId" component={Article} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
          <ScrollToTopController />
        </div>
      </Router>
    );
  }
}

export default App;
