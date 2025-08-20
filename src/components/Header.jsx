import { NavLink } from "react-router";
import { FaPaperPlane, FaPhone, FaUser } from "react-icons/fa";

export default function Header() {
    return (
        <header className="w-full">
            {/* Top Bar */}
            <div className="bg-[#152941] text-white text-sm">
                <div className="max-w-[1920px] mx-auto flex justify-between items-center px-8 py-2">
                    <div className="flex items-center space-x-6">
                        <p className="flex items-center space-x-2">
                            <FaPaperPlane />
                            <span>4000@dinmaegler.com</span>
                        </p>
                        <p className="flex items-center space-x-2">
                            <FaPhone />
                            <span>+45 7070 4000</span>
                        </p>
                    </div>
                    <NavLink to="/login" className="flex items-center space-x-2">
                        <FaUser />
                        <span>Log ind</span>
                    </NavLink>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-[1920px] mx-auto flex justify-between items-center px-8 py-4">
                    <img src="../src/assets/g1430.png" alt="Din Mægler"  />

                    {/* Nav Links */}
                    <ul className="flex space-x-8 text-[#2b2b2b] font-medium">
                        <li>
                            <NavLink to="/Boliger" className="hover:text-[#152941]">Boliger til salg</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Agent" className="hover:text-[#152941]">Mæglere</NavLink>
                        </li>
                        <li>
                            <NavLink to="/shop" className="hover:text-[#152941]">Mine favoritter</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className="hover:text-[#152941]">Kontakt os</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
