import React from "react";

import "./style.css";

class Input extends React.Component {
  render() {
    const { inInput1, inInput2, calculation } = this.props;
    return (
      <div className="input-output">
        <div>{inInput1 || ""}</div>
        <div>
          {calculation}
          {inInput2}
        </div>
      </div>
    );
  }
}

export default Input;
