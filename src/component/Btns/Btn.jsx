import React from "react";

class Btn extends React.Component {
  render() {
    const { className, content, click } = this.props;
    return (
      <button className={className} onClick={click} name={content}>
        {content}
      </button>
    );
  }
}

export default Btn;
