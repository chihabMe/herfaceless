import Benefits from "./_components/Benefits";
import Hero from "./_components/Hero";
import Problem from "./_components/Problem";
import Reviews from "./_components/Reviews";
import SayGoodBTo from "./_components/SayGoodBTo";
import TopBenefits from "./_components/TopBenefits";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Benefits/>
      <TopBenefits/>
      <Reviews/>
      <Problem/>
      <SayGoodBTo/>
    </main>
  );
}
