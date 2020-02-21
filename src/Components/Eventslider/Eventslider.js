import React from "react";
import "./Eventslider.css";

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
    activeElements.forEach(ele => {
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
