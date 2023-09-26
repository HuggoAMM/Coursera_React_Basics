import React from "react";

function Header(props) {
  return (
    <h1>
      Hello {props.name}, color favorito es: {props.color}
    </h1>
  );
}
export default Header;
