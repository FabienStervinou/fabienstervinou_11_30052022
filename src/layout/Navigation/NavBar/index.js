import "./style.scss";
import { NavItem } from "../NavItem/index";
import { Logo } from "../../../components/logo/index";

export function NavBar () {
  return <nav className='navBar'>
    <Logo />
    <NavItem link="/" text="Accueil"></NavItem>
    <NavItem link="/about" text="A propos"></NavItem>
  </nav>
}