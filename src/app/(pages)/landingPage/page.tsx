// importing components
import dynamic from "next/dynamic";
// importing main components
const LeftSide = dynamic(() => import("../../components/leftSide/page"));
const RightSide = dynamic(() => import("../../components/rightSide/page"));
const Footer = dynamic(() => import("../../components/footer/Footer"));
const MenuBar = dynamic(() => import("../../components/menuBar/MenuBar"));
const TopScroller = dynamic(() => import("../../components/topScroller/TopScroller"));

function LandingPage() {
  return (
    <div className="flex flex-col items-center bg-[#181616] lg:bg-transparent">
      <div className="flex flex-col md:flex-row w-[100%] lg:w-[1400px] lg:my-10 lg:shadow-2xl">
        <LeftSide />
        <RightSide />
      </div>
      <TopScroller />
      <MenuBar />
      <Footer />
    </div>
  );
}

export default LandingPage;
