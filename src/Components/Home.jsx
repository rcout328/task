import Footer from "./Footer";
import Main2 from "./Main2";
import Main3 from "./Main3";
import Maincontent from "./Maincontent";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <Maincontent />
        <Main2 />
        <Main3 />
        <Footer />
      </div>
    </>
  );
}
