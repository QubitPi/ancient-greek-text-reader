import "./styles.css";
import logo from './logo.svg'

const Header = () => {
  return (
      <div className="header-bar">
        <div className="logo">
          <img src={logo} alt='logo'/>
        </div>
        <h1 className="header-title">
          Ancient Greek Pronunciation Reconstruction with AI
        </h1>
      </div>
  );
};

export default Header;
