import Logo from "../img/logo.svg";
const Header = () => {
  return (
    <header className="header_content">
      <img src={Logo} alt="Logo de vinted" />
      <button>S'inscrire</button>
      <button>Se connecter</button>
      <button>Vends tes articles</button>
    </header>
  );
};

export default Header;
