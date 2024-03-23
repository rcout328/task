import { CiMenuBurger } from "react-icons/ci";
export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row mt-5 ml-20 mr-20 mad:ml-80 mad:mr-80">
        <h1 className="text-2xl font-medium">ZERO</h1>

        <ul className="flex flex-row gap-5 uppercase  w-screen justify-center items-center text-center">
          <li>Misson</li>
          <li>Trainnig</li>
          <li>About</li>
        </ul>

        <CiMenuBurger size={40} />
      </nav>
    </>
  );
}
