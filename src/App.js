import React, { Component } from "react";
import './App.css';


class App extends Component {
  state = {
    person: {
      fullName: "OluDamilola Omo Osinowo",
      bio: <h4>I am an inspiring web engineer with lots of experience in React, Javascript and Node.Javascript </h4>,
      imgSrc: "logo.jpg",
      profession: "Web Developer and Master of Ceremonies"
    },
    shows: false,
    intervalId: null,
    elapsedTime: 0,
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState((prevState) => ({ elapsedTime: prevState.elapsedTime + 1 }));
    }, 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  handleToggle = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };

  render() {
    const { person, shows, elapsedTime } = this.state;
    return (
      <div>
        <button onClick={this.handleToggle}>Toggle</button>
        {shows && (
          <div>
            <img className="img" src={person.imgSrc} alt={person.fullName} />
            <h1>{person.fullName}</h1>
            <h2>{person.profession}</h2>
            <p>{person.bio}</p>
          </div>
        )}
        <p>Elapsed time: {elapsedTime} seconds</p>
      </div>
    );
  }
}

export default App;