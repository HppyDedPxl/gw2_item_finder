import { NavLink } from "react-router-dom";

export type FooterProps = {

}

const Footer = (props: FooterProps) => (
    <footer className="bg-primary text-white h-12 sm:h-8 border-t-4 border-secondary font-serif shadow-footer">
 
        <div className="grid grid-cols-2 w-full h-full">
        <div></div>
            <div className="flex flex-row items-center justify-end px-4 space-x-2">
            <p className="flex text-xs text-white">&copy; 2022 FindMySkritt</p>
                <div className="flex dot"></div>
                <p className="flex text-xs text-link hover:text-white transition-all hover:transition-all"><NavLink key="about" to="about">About / Contact</NavLink></p>
                <div className="flex dot"></div>
                <p className="flex text-xs text-link hover:text-white transition-all hover:transition-all"><NavLink key="legal" to="legal">Legal Disclaimers</NavLink></p>
            </div>
        </div>
    </footer>
  );
  

export default Footer;