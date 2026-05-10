import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "~contexts/SidebarContext";
import { CartContext } from "~contexts/CartContext";
import { BsBag, BsList, BsX } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import Logo from "~assets/Logo.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  const isActiveLink = (path) => {
    return location.pathname === path ? "text-red-500 border-b-2 border-red-500" : "text-gray-700 hover:text-red-500";
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <nav className="container px-[3%] mx-auto flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link to="/" onClick={closeMobileMenu}>
            <img className="max-w-[40px]" src={Logo} alt="" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link
            to="/"
            className={`font-semibold transition-colors ${isActiveLink("/")}`}
          >
            Home
          </Link>
          <Link
            to="/store"
            className={`font-semibold transition-colors ${isActiveLink("/store")}`}
          >
            Store
          </Link>
          <Link
            to="/contact"
            className={`font-semibold transition-colors ${isActiveLink("/contact")}`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button & Cart */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-2xl focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <BsX /> : <BsList />}
          </button>

          {/* Cart Icon */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer flex relative"
          >
            <BsBag className="text-2xl" />
            <div
              className="
            bg-red-500 absolute -right-2 -bottom-2
            text-[12px] w-[18px] h-[18px] text-white
            rounded-full flex justify-center items-center
            "
            >
              {itemAmount}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t">
          <div className="container mx-auto px-[3%] py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`font-semibold transition-colors py-2 ${isActiveLink("/")}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                to="/store"
                className={`font-semibold transition-colors py-2 ${isActiveLink("/store")}`}
                onClick={closeMobileMenu}
              >
                Store
              </Link>
              <Link
                to="/contact"
                className={`font-semibold transition-colors py-2 ${isActiveLink("/contact")}`}
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;
