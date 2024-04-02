import BestSellers from "@/app/(shop)/component/best-sellers";
import CartProduct from "@/app/(shop)/component/cart-product";
import Hero from "@/app/(shop)/component/hero";
import LatestDesigns from "@/app/(shop)/component/latest-designs";
import PopularDesigns from "@/app/(shop)/component/popular-designs";
import SpecialSale from "@/app/(shop)/component/special-sale";
import TopDesigners from "@/app/(shop)/component/top-designers";
import Categorization from "@/component/categorization";
import Banner from "@/app/(shop)/component/banner";
import Navigation from "@/component/nav";
import School from "@/app/(shop)/component/school";

const Home = ()=>{
    return(
        <div className={'px-4 md:px-28'}>
            <Navigation/>
            <Hero/>
            <Categorization/>
            <BestSellers/>
            <SpecialSale/>
            <PopularDesigns/>
            <TopDesigners/>
            <School/>
            <Banner/>
            <LatestDesigns/>
        </div>
    )
}
export default Home