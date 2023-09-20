import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [navMenu, setNavMenu] = useState(false);

  return (
    <div>
      <header className="padding-x py-6 absolute z-10 w-full bg-slate-800">
        <nav className="flex justify-between items-center max-container">
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-white font-bold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden max-lg:block hover:rotate-45 transition-transform cursor-pointer">
            <img
              src={hamburger}
              alt="hamburger"
              width={25}
              height={25}
              onClick={() => {
                if (navMenu == false) {
                  setNavMenu(true);
                } else if (navMenu == true) {
                  setNavMenu(false);
                }
              }}
            />
          </div>
        </nav>
        {navMenu && (
          <ul className="flex flex-col items-end gap-2 absolute top-14 right-0 px-4 py-3 bg-slate-800 ">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
};

export default Nav;
