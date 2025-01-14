import Blog from "../../components/Blog/Blog";
import Body from "../../components/Body/Body";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import Header from "../../components/Header/Header";
import InfoBlock from "../../components/InfoBlock/InfoBlock";
import CarouselComponent from "../../components/Carousel/Carousel";
import Market from "../../components/Market/Market";
import Navigation from "../../components/Navigation/Navigation";
import RightSide from "../../components/RightSide/RightSide";
import ShoppingBlock from "../../components/ShoppingBlock/ShoppingBlock";

function Home() {
  return (
    <section className={"max-w-screen container mx-auto flex h-full flex-col"}>
      <Header />
      <Body>
        <CarouselComponent />
        <RightSide />
      </Body>
      <InfoBlock />
      <Market>
        <Navigation />
        <ShoppingBlock />
      </Market>
      <Blog>
        <Gallery />
      </Blog>
      <Footer />
    </section>
  );
}

export default Home;
