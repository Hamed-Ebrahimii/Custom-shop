
import Categorization from "@/component/categorization";
import Nav from "@/component/nav";
import Hero from "@/app/component/hero";

export default function Home() {
  return (
    <div className={'w-full px-28'}>
        <Nav/>
        <Hero/>
      <Categorization />
    </div>
  );
}
