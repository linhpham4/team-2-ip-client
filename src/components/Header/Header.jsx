import "./Header.scss";
import header from "../../assets/images/top-header.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link>
      <img src={header} className="header__image" />
    </Link>
  );
};
export default Header;
