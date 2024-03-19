import { useState } from "react";
import Link from "../Link/Link";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "NotFound", path: "*" },
  ];

  return (
    <nav className="bg-green-700 p-6">
      <div className="md:hidden " onClick={() => setOpen(!open)}>
        {open === true ? (
          <button>
            <AiOutlineClose className="text-2xl hover:duration-500 rounded-md hover:bg-blue-950 hover:text-green-700  text-blue-950" />
          </button>
        ) : (
          <button>
            <HiMenuAlt1 className="text-2xl hover:duration-500 rounded-md hover:bg-blue-950 hover:text-green-700 text-blue-950" />
          </button>
        )}
      </div>
      <ul
        className={`md:flex justify-center absolute md:static shadow-2xl duration-500 bg-green-700 px-6 
      ${open ? "top-16" : "-top-60"}
      `}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
