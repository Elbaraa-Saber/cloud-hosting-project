// this is the main page that will be used like random into layout children

import Hero from "@/components/home/Hero";
import WebHostingPlan from "@/components/home/WebHostingPlan";

// this page should be used into app directly and called page
export default function HomePage() {
  return (
    <section>
      <Hero />
      <h2 className="text-center mt-10 text-3xl font-bold">
        Choose Your Web Hosting Plan
      </h2>
      <div className="container m-auto flex justify-center items-center my-7 flex-wrap md:gap-7">
        <WebHostingPlan/>
        <WebHostingPlan/>
        <WebHostingPlan/>
      </div>
    </section>
  );
}
