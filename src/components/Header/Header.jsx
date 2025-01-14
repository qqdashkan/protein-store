import logo from "/go-on-logo.svg";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { NavLink } from "react-router";

function Header() {
  return (
    <header className="mx-auto w-full">
      <div className="mx-auto flex h-24 w-4/5 items-center justify-between space-x-4 text-xl font-normal uppercase text-white">
        <h2>Bars</h2>
        <h2>Whey</h2>
        <h2>Bcaa</h2>
        <NavLink to="/">
          <img src={logo} alt="logo" className="h-12 w-auto" />
        </NavLink>
        <NavLink to="about">
          <h2>About us</h2>
        </NavLink>
        <h2>Contacts</h2>
        <span className="flex gap-8">
          <FavoriteBorderIcon fontSize="medium" />
          <PermIdentityIcon fontSize="medium" />
          <ShoppingCartOutlinedIcon fontSize="medium" />
        </span>
      </div>
      <hr className="border-surface" />
    </header>
  );
}

export default Header;
