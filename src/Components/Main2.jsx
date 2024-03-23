export default function Main2() {
  return (
    <div className="flex flex-col items-center mad:ml-80 mad:mr-80 mt-10 phone:mt-80">
      <div className="w-full pl-10 pr-10">
        <img
          src="https://i.ibb.co/wBfz1bY/valery-sysoev-LDAir-ERNzew-unsplash.jpg"
          alt="Descriptive alt text"
          className="w-full h-auto  rounded-3xl mt-20 object-cover"
          style={{ maxHeight: "600px" }}
        />
      </div>
      <div className="flex flex-col items-center text-center uppercase text-5xl font-medium mt-20 space-y-4 phone:text-xl mae:text-4xl">
        <span>Fitness is all about feeling great.</span>
        <span>Motivated, positive, and having</span>
        <span>Enough energy in your body to</span>
        <span>Carry out your goals.</span>
      </div>

      <div className="flex flex-row items-center mx-20 my-20 space-x-10 phone:hidden mae:hidden">
        <img
          src="https://i.ibb.co/wBfz1bY/valery-sysoev-LDAir-ERNzew-unsplash.jpg"
          alt="Exercise Visual"
          className="w-1/2 rounded-3xl object-cover"
          style={{ maxHeight: "400px" }}
        />
        <div className="flex flex-col space-y-4">
          <div className="text-4xl font-medium uppercase">
            <p>Best exercises to</p>
            <p>do at your home from</p>
            <p>the app</p>
          </div>
          <div className="text-xl font-light pt-5">
            <p>
              We believe that treatment should go without hitch and stress and
              create comfortable conditions for everyone.
            </p>
            <p>
              Discover our approach to staying fit and healthy with simple,
              effective home exercises.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
