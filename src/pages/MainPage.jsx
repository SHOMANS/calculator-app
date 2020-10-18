import React from "react";
import Main from "../component/Main/index";
import "./style.css";

function MainPage() {
  return (
    <div className="all">
      <Main className="hiddenS" />
      <Main className="hidden" />
      <Main className="hidden" />
    </div>
  );
}
export default MainPage;
