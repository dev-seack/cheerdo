import React from "react";
import "./Eventslider.css";
import Ticker from 'react-ticker'

class Eventslider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        "Aktuell findet aufgrund von COVID-19 leider kein Präsenztraining statt - wir freuen uns weiterhin über eure Anfragen zum Probetraining",
      ],
      duration: 25000
    };
  }

  render() {
    return (
      <div className="Eventslider">
        <Ticker offset="run-in" direction="toRight">
          {() => (
            <div style={{ whiteSpace: "pre" }}>             - {this.state.events.join(" -                          - ")} -             </div>
          )}
        </Ticker>
      </div>
    );
  }
}

export { Eventslider };