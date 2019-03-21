import React from "react";
import "./Eventslider.css";

class Eventslider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        "Die Europameisterschaft startet am 01.05.2019",
        "Die deutsche Meisterschaft startet am 11.08.2019",
        "Die Weltmeisterschaft am 13.03.2019 in Colorado"
      ],
      duration: 25000
    };
  }

  componentDidMount() {
    let elements = document.querySelectorAll(".Eventslider p");
    let counter = 0;
    const delay = Math.floor(this.state.duration / this.state.events.length);

    const slideHandler = () => {
      elements[counter % this.state.events.length].classList.add("active");
      counter++;
      this.checkForCollision();
    };

    slideHandler();

    this.slideInterval = setInterval(slideHandler, delay);
  }

  componentWillUnmount() {
    clearInterval(this.slideInterval);
  }

  checkForCollision() {
    let activeElements = document.querySelectorAll(".Eventslider p.active");
    activeElements.forEach((ele) => {
      if (ele.getBoundingClientRect().x >= window.innerWidth) {
        ele.classList.remove("active");
        ele.classList.add("reset");
        ele.classList.remove("reset");
      }
    });
  }

  render() {
    return (
      <div className="Eventslider">
        {this.state.events.map((event, index) => {
          return (
            <p
              style={{
                width: window.innerWidth / this.state.events.length,
                minWidth: "450px",
                left: -(window.innerWidth / this.state.events.length) - 500
              }}
              key={index}
            >
              - {event} -
            </p>
          );
        })}
      </div>
    );
  }
}

export { Eventslider };
