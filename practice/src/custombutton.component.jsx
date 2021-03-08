import React from "react";
var fun = () => document.write("ALAVALATHI GOPAL");

function Custombutton(props) {
  return (
    <div>
      <button onClick={fun}>CLICK</button>
    </div>
  );
}
export default Custombutton;
