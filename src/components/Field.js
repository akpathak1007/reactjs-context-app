import React from 'react';


const Field = () => {
  return (
    <div className="my-2">
      <label htmlFor="userinput" className="form-label">Name</label>
      <input type="text" id="userinput" className="form-control" />
    </div>
  )
}

export default Field;