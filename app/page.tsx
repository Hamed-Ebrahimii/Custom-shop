
import Categorization from "@/component/categorization";
import Nav from "@/component/nav";
import Hero from "@/app/component/hero";
import BestSellers from "@/app/component/best-sellers";
import SpecialSale from "@/app/component/special-sale";

export default function Home() {
  return (
    <div className={'w-full px-5 md:px-28'}>
        <Nav/>
        <Hero/>
      <Categorization />
        <BestSellers/>
        <SpecialSale/>
    </div>
  );
}
