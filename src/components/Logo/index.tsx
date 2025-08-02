import { Link } from "react-router";
import logo from "../../assets/logo.svg";

const Logo = () => <Link to="/"><img src={logo} alt="Logo eFood" /></Link>;

export default Logo;
