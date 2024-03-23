import { FaLongArrowAltRight } from "react-icons/fa";
export default function Maincontent() {
  return (
    <>
      <div className="flex flex-row ml-20 mr-20 mt-20 mad:ml-80 mad:mr-80 phone:ml-5 phone:flex phone:flex-col man:mb-10 ">
        <div className="flex flex-col text-8xl mal:text-7xl font-bold uppercase phone:text-5xl mae:text-4xl man:text-6xl">
          <span>Make you</span>
          <span>From zero</span>
          <span>To hero.</span>
        </div>

        <div className="flex flex-col ml-20 mad:absolute  mad:right-0 mad:mr-80 mac:right-0 mac:absolute mac:mr-20 absolute right-0 phone:mt-40 phone:ml-5 phone:mr-5 phone:absolute phone:left-0 mae:pr-5 man:pr-10">
          <div className=" flex flex-col text-xl mt-3 phone:hidden">
            <span>We believe that treatment should go without</span>
            <span>hitch and stress and create comfortable</span>
            <span>conditions for everyone</span>
          </div>

          <div className="flex flex-row items-center relative mt-10 ">
            <div className="flex -space-x-3">
              <div className="w-4 h-4 p-5 rounded-full bg-black z-10"></div>
              <div className="w-4 h-4 p-5 rounded-full bg-black z-20"></div>
              <div className="w-4 h-4 p-5 rounded-full bg-black z-30"></div>
              <div className="w-4 h-4 p-5 rounded-full bg-black z-40"></div>
            </div>
            <div className="flex flex-col ml-4">
              <span>We have achieved 4.8M+</span>
              <span>followers on social</span>
              <span>media platforms</span>
            </div>
          </div>

          <div className="flex flex-row mt-10 gap-10">
            <span className="uppercase font-medium">Contact now</span>
            <FaLongArrowAltRight size={30} />
          </div>
        </div>
      </div>
    </>
  );
}
