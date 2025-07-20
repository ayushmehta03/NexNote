import CompanionCard from "@/components/CompanionCrad";
import CompanionList from "@/components/CompanionList";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main>
    <h1 >Popular Companions</h1>
    <section className="home-section">
    <CompanionCard/>
    <CompanionCard/>
    <CompanionCard/>
    </section>
    <section className="home-section">
          <CompanionList />
          <CTA />
</section>
    </main>
  );
}
