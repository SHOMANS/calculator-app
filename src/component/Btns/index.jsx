import React from "react";
import Btn from "../Btns/Btn";

import "./style.css";

class Main extends React.Component {
  state = {};
  render() {
    const {
      click,
      calculate,
      plus,
      minus,
      multiplied,
      divided,
      AC,
      percentage,
      plusMinus,
    } = this.props;
    return (
      <div className="btns">
        <Btn click={AC} content="AC" className="light-purple" />
        <Btn click={plusMinus} content="+/-" className="light-purple" />
        <Btn click={percentage} content="%" className="light-purple" />
        <Btn click={divided} content="÷" className="dark-purple" />
        <Btn click={click} content="7" className="dark-brown" />
        <Btn click={click} content="8" className="dark-brown" />
        <Btn click={click} content="9" className="dark-brown" />
        <Btn click={multiplied} content="×" className="dark-purple" />
        <Btn click={click} content="4" className="dark-brown" />
        <Btn click={click} content="5" className="dark-brown" />
        <Btn click={click} content="6" className="dark-brown" />
        <Btn click={minus} content="-" className="dark-purple" />
        <Btn click={click} content="1" className="dark-brown" />
        <Btn click={click} content="2" className="dark-brown" />
        <Btn click={click} content="3" className="dark-brown" />
        <Btn click={plus} content="+" className="dark-purple" />
        <Btn click={click} content="0" className="dark-brown-zero" />
        <Btn click={click} content="." className="dark-brown" />
        <Btn click={calculate} content="=" className="dark-purple" />
      </div>
    );
  }
}

export default Main;
