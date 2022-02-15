import React from "react";
import ColorContext from "../context/ColorContext";
import LanguageContext from "../context/LanguageContext";

class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`btn btn-${color} my-2`}>
            <LanguageContext.Consumer>
              {(value) => (value === "English" ? "Submit" : "Voorleggen")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
};

export default Button;
