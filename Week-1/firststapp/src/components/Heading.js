import logo from "./../logo.png";

function Logo(props) {
  const userPic = <img src={logo}></img>;
  return userPic;
}

function Heading(props) {
  return (
    <>
      <aside className="head-style">
        <h1>Hello, {props.firstName}</h1>
      </aside>
      <Logo />
    </>
  );
}

export default Heading;
