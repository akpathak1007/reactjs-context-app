import React from 'react';
import LanguageContext from '../context/LanguageContext';


class Field extends React.Component {
  static contextType = LanguageContext;
  render() {
    const name = this.context === 'English' ? 'Name' : 'Naam';

    return (
    <div className="my-2">
        <label htmlFor="userinput" className="form-label">{name}</label>
        <input type="text" id="userinput" className="form-control" />
      </div>
    )
  }
}

export default Field;