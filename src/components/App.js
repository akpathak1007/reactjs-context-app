import React from "react";
import Flags from "country-flag-icons/react/1x1";

import "./App.css";
import UserCreate from "./UserCreate";

class App extends React.Component {
  state = { language: "English" };
  onLanguageChaange = (language) => {
    this.setState({ language: language });
  };
  render() {
    return (
      <div className="container">
        <span className="fw-bolder">Select a language</span>
        <div
          className=" d-inline-block m-2 icon"
          onClick={() => this.onLanguageChaange("Engalish")}
        >
          <Flags.US title="United States" />
        </div>
        <div
          className=" d-inline-block m-2 icon"
          onClick={() => this.onLanguageChaange("Dutch")}
        >
          <Flags.NL title="United States" />
        </div>
        <UserCreate />
        <h4>{this.state.language}</h4>
      </div>
    );
  }
}
export default App;
