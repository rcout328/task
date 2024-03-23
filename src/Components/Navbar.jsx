import { CiMenuBurger } from "react-icons/ci";
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <h1 className="navbarlogo">ZERO</h1>

        <ul className="flex flex-row gap-5 uppercase  w-screen justify-center items-center text-center phone:hidden">
          <li>Misson</li>
          <li>Trainnig</li>
          <li>About</li>
        </ul>

        <CiMenuBurger size={40} className="menu" />
      </nav>
    </>
  );
}
