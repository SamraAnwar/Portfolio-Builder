import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Templates", path: "/templates" },
  { name: "Pricing", path: "/pricing" },
  
];


function Navbar() {
 
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      <h1 className="text-xl font-bold">Portfolio Builder</h1>

     <div className="flex items-center gap-8">
       {navLinks.map((link) => (
        <NavLink
  key={link.path}
  to={link.path}
  className={({ isActive }) =>
   `transition-colors ${
      isActive
        ? "font-bold text-blue-600"
        : "text-neutral-600 hover:text-blue-600"
    }`
  }
>
  {link.name}
</NavLink>
))}
     </div>
    </nav>
  );
}

export default Navbar;