export default function Footer() {
  return (
    <>
      <div className="bg-white ml-20 mr-20 mt-20 flex flex-col mad:ml-80 mad:mr-80 phone:ml-5 phone:mt-10 mae:ml-10">
        <span className="text-5xl font-bold">ZERO</span>
        <span className="text-xl mt-10 phone:mt-5 phone:text-xs">
          Need help?Contact us
        </span>
        <span className="text-7xl font-bold mt-5 mb-60 phone:text-2xl">
          INFO@ZERO.COM
        </span>

        <div className="flex flex-row mb-10 ad:ml-80 mad:mr-80">
          <span className="">@ZERO ALL RIGHTS RESERVED</span>
          <div className="absolute right-0 mr-20 flex flex-row gap-10 mad:mr-80 phone:mt-10 phone:ml-5">
            <span>PRIVACT POLICY</span>
            <span>TERMS AND CONDITION</span>
          </div>
        </div>
      </div>
    </>
  );
}
