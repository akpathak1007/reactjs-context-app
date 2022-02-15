import React from "react";
import LanguageContext from "../context/LanguageContext";

class Button extends React.Component {
  static contextType = LanguageContext;
  render() {
    const text = this.context === "English" ? "Submit" : "Voorleggen";
    return <button className="btn btn-primary my-2">{text}</button>;
  }
};

export default Button;
