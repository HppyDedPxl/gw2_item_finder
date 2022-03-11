import { NavLink } from "react-router-dom";

export type FooterProps = {

}

const Footer = (props: FooterProps) => (
    <footer className="bg-primary text-white p-4 h-[120px] border-t-2 border-secondary font-serif">
 
        <div className="grid grid-cols-5">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
            <div>
                <p className="text-sm font-bold">About Us</p>
                <p className="text-xs text-link hover:text-white transition-all hover:transition-all"><NavLink key="about" to="about">About</NavLink></p>
                <p className="text-xs text-link hover:text-white transition-all hover:transition-all"><NavLink key="legal" to="legal">Legal Disclaimers</NavLink></p>
            </div>
        </div>
    </footer>
  );
  

export default Footer;