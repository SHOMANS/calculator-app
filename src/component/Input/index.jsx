import React from "react";

import "./style.css";

class Input extends React.Component {
  render() {
    const { inInput1, inInput2, calculation, press, myRef } = this.props;
    return (
      <textarea
        className="input-output"
        type="text"
        autoFocus
        value={`${inInput1 || ""}${calculation}${inInput2}`}
        onKeyPress={(event) => press(event)}
        ref={myRef}
        readOnly
      />
    );
  }
}

export default Input;
