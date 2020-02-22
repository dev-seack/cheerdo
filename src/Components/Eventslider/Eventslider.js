import React from "react";
import "./Eventslider.css";
import Ticker from 'react-ticker'

class Eventslider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        "SALC West in Düsseldorf 20.06.2020",
        "Die deutsche Meisterschaft am 28.03.2020 in Riesa",
        "ECC (1) im Movie Park in Bottrop am 23.05.2020 & 24.05.2020",
        "ECC (2) im Movie Park in Bottrop am 30.05.2020 & 31.05.2020"
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