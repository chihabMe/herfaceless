import Benefits from "./_components/Benefits";
import FeaturesGrid from "./_components/FeaturesGrid";
import GamePlan from "./_components/GamePlan";
import Hero from "./_components/Hero";
import IsThatYou from "./_components/IsThatYou";
import MemberShip from "./_components/MemberShip";
import Pricing from "./_components/Pricing";
import Problem from "./_components/Problem";
import QandA from "./_components/QandA";
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
      <MemberShip/>
      <Pricing/>
      <GamePlan/>
      <IsThatYou/>
      <FeaturesGrid/>
      <QandA/>
    </main>
  );
}
