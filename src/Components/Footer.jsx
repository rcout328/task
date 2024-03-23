export default function Footer() {
  return (
    <>
      <div className="bg-white ml-20 mr-20 mt-20 flex flex-col mad:ml-80 mad:mr-80">
        <span className="text-5xl font-bold">ZERO</span>
        <span className="text-xl mt-10">Need help?Contact us</span>
        <span className="text-7xl font-bold mt-5 mb-60">INFO@ZERO.COM</span>

        <div className="flex flex-row mb-10 ad:ml-80 mad:mr-80">
          <span>@ZERO ALL RIGHTS RESERVED</span>
          <div className="absolute right-0 mr-20 flex flex-row gap-10 mad:mr-80">
            <span>PRIVACT POLICY</span>
            <span>TERMS AND CONDITION</span>
          </div>
        </div>
      </div>
    </>
  );
}
