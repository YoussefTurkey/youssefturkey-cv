// importing components
import dynamic from "next/dynamic";
// importing main components
const LandingPage = dynamic(() => import("./(pages)/landingPage/page"));

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <LandingPage />
    </main>
  );
}
