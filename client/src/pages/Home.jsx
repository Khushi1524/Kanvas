import CardList from "../components/CardList";
import CTA from "../components/CTA";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
// import WhyChoose from "../components/WhyChoose";

const Home = () => {
  return (
    <div className=" bg-off-white">
      <Hero />
      <CardList />
      <Featured />
      <ProductList/>
      {/* <WhyChoose /> */}
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;
