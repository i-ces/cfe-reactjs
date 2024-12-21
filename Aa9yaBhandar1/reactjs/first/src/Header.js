import logo from "./headerLogo.jpg";
function Header() {
  return (
    <header className="header">
      <img id="logo" src={logo} alt="Header pic"></img>
      <p>Home </p>
      <p> About </p>
      <p> Services </p>
      <p> About </p>
    </header>
  );
}

export default Header;
