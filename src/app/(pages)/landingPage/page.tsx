// importing components
import dynamic from "next/dynamic";
// importing main components
const LeftSide = dynamic(() => import("../../components/leftSide/page"));
const RightSide = dynamic(() => import("../../components/rightSide/page"));

function LandingPage() {
  return(
    <div className="flex w-[1400px] py-10 shadow-2xl">
        <LeftSide />
        <RightSide />
    </div>
  );
}

export default LandingPage;
