import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      <h1 className="text-xl font-bold">Portfolio Builder</h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
         <Link to="/about">About</Link>
        <Link to="/templates">Templates</Link>
        <Link to="/pricing">Pricing</Link>
      </div>
    </nav>
  );
}

export default Navbar;