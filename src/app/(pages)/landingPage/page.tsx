// importing components
import dynamic from "next/dynamic";
// importing main components
const LeftSide = dynamic(() => import("../../components/leftSide/page"));
const RightSide = dynamic(() => import("../../components/rightSide/page"));
const Footer = dynamic(() => import("../../components/footer/Footer"));

function LandingPage() {
  return(
    <div className="flex flex-col items-center">
    <div className="flex w-[1400px] my-10 shadow-2xl">
        <LeftSide />
        <RightSide />
    </div>
    <Footer />
    </div>
  );
}

export default LandingPage;
