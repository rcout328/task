import { CiMenuBurger } from "react-icons/ci";
export default function Navbar() {
  return (
    <>
      <nav className="flex flex-row mt-5 ml-20 mr-20 mad:ml-80 mad:mr-80 man:flex man:flex-row phone:flex phone:flex-row mae:ml-10">
        <h1 className="text-2xl font-medium phone:absolute phone:left-0 phone:text-3xl phone:ml-5 ">
          ZERO
        </h1>

        <ul className="flex flex-row gap-5 uppercase  w-screen justify-center items-center text-center phone:hidden">
          <li>Misson</li>
          <li>Trainnig</li>
          <li>About</li>
        </ul>

        <CiMenuBurger
          size={40}
          className="man:absolute man:right-0 phone:absolute phone:right-0 phone:mr-5 mae:absolute mae:right-0 mae:mr-10 man:mr-10"
        />
      </nav>
    </>
  );
}
