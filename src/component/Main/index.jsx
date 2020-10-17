import React from "react";
import Input from "../Input/index";
import Btns from "../Btns/index";
import numbers, { operators } from "../utils";

import "./style.css";

class Main extends React.Component {
  state = {
    inInput1: "",
    inInput2: "0",
    calculation: "",
  };

  AC = () => {
    this.setState(() => {
      return { inInput1: "", inInput2: "0", calculation: "" };
    });
  };

  plusMinus = () => {
    this.setState((prevState) => {
      return {
        inInput2: prevState.inInput2 * -1,
        inInput1: prevState.inInput1 * -1,
      };
    });
  };

  percentage = () => {
    this.setState((prevState) => {
      return { inInput2: prevState.inInput2 / 100 };
    });
  };

  click = (e, name) => {
    let _name = name;
    if (!_name) {
      _name = e.target.name;
    }
    this.setState((prevState) => {
      if (this.state.inInput2 === "0") {
        return { inInput2: `${_name}` };
      }
      return { inInput2: `${prevState.inInput2}${_name}` };
    });
  };

  plus = () => {
    this.setState((prevState) => {
      return {
        inInput1: Number(prevState.inInput1) + Number(prevState.inInput2),
        inInput2: "",
        calculation: "+",
      };
    });
  };

  minus = () => {
    this.setState((prevState) => {
      return {
        inInput1: Number(prevState.inInput2) - Number(prevState.inInput1),
        inInput2: "",
        calculation: "-",
      };
    });
  };

  minusFunc = () => {
    this.setState((prevState) => {
      return {
        inInput1: Number(prevState.inInput1) - Number(prevState.inInput2),
        inInput2: "",
        calculation: "-",
      };
    });
  };

  multiplied = () => {
    this.setState((prevState) => {
      return {
        inInput1:
          Number(prevState.inInput2) * (Number(prevState.inInput1) || 1),
        inInput2: "",
        calculation: "×",
      };
    });
  };

  divided = () => {
    this.setState((prevState) => {
      return {
        inInput1:
          Number(prevState.inInput2) / (Number(prevState.inInput1) || 1),
        inInput2: "",
        calculation: "÷",
      };
    });
  };

  dividedFunc = () => {
    this.setState((prevState) => {
      return {
        inInput1:
          (Number(prevState.inInput1) || 1) / Number(prevState.inInput2),
        inInput2: "",
        calculation: "÷",
      };
    });
  };

  calculate = () => {
    if (this.state.calculation === "+") {
      this.plus();
    }
    if (this.state.calculation === "-") {
      this.minusFunc();
    }
    if (this.state.calculation === "×") {
      this.multiplied();
    }
    if (this.state.calculation === "÷") {
      this.dividedFunc();
    }
    this.setState(() => {
      return {
        calculation: "",
      };
    });
  };

  press = (event) => {
    event.preventDefault();
    const pressed = event.key;
    if (numbers[pressed]) {
      this.click(null, pressed);
    }
    if (operators[pressed]) {
      this[operators[pressed]]();
    }
  };

  myRef = React.createRef();

  componentDidUpdate() {
    const node = this.myRef.current;
    node.focus();
  }

  render() {
    const { inInput1, inInput2, calculation } = this.state;
    return (
      <main className="main">
        <Input
          inInput1={inInput1}
          inInput2={inInput2}
          calculation={calculation}
          press={this.press}
          myRef={this.myRef}
        />
        <Btns
          click={this.click}
          plus={this.plus}
          minus={this.minus}
          multiplied={this.multiplied}
          divided={this.divided}
          calculate={this.calculate}
          AC={this.AC}
          percentage={this.percentage}
          plusMinus={this.plusMinus}
        />
      </main>
    );
  }
}

export default Main;
