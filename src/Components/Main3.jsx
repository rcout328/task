import { FaApple } from "react-icons/fa";
export default function Main3() {
  return (
    <>
      <div className="flex flex-col bg-black h-screen px-20 text-white mad:ml-80 mad:mr-80 mad:rounded-3xl">
        <div className="flex flex-row items-start space-x-10 mt-20">
          <div className="flex flex-col uppercase text-4xl space-y-2">
            <span>Find The</span>
            <span>Best Training</span>
          </div>
          <div className="flex flex-col text-xl font-light space-y-4 max-w-md">
            <p>
              We believe that treatment should go without hitch and stress and
              create comfortable conditions for everyone.
            </p>
          </div>
          <a href="#" className="text-white-500 underline mt-4">
            categories
          </a>
        </div>
        <div className="flex flex-row items-start space-x-10 mt-10 mr-20">
          <img
            src="https://i.ibb.co/wzk9md9/john-fornander-TAZo-Um-Dqz-Xk-unsplash.jpg"
            alt="Exercise Visual"
            className="w-1/2 rounded-3xl object-cover"
            style={{ maxHeight: "400px" }}
          />
          <img
            src="https://i.ibb.co/NNCzX0p/jared-rice-NTy-Bbu66-SI-unsplash.jpg"
            alt="Exercise Visual"
            className="w-1/2 rounded-3xl object-cover"
            style={{ maxHeight: "400px" }}
          />
          <img
            src="https://i.ibb.co/CbP8ZVS/zac-ong-RYv-OI54rm-Pw-unsplash.jpg"
            alt="Exercise Visual"
            className="w-1/2 rounded-3xl object-cover"
            style={{ maxHeight: "400px" }}
          />
        </div>

        <div className="flex flex-row mt-40">
          <div className="flex flex-col text-6xl uppercase">
            <span>Download</span>
            <span>Our free app</span>
          </div>

          <div className="absolute right-0 mr-40 mad:mr-80 flex flex-row mt-10 border p-6 rounded-full">
            <span className="text-3xl uppercase">Get the app</span>
            <FaApple className="ml-5" size={30} />
          </div>
        </div>
      </div>
    </>
  );
}
