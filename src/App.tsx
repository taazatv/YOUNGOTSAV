import Carousel from "./components/carousel";
import Description from "./components/description";
import Navbar from "./components/navbar";
import Tickers from "./components/tickers";
import Sponsors from "./components/sponsors";
import Gallery from "./components/gallery";
import Footer from "./components/footer";
import Review from "./components/review";
import Events from "./components/events";
// import Banner26 from './components/banner26';

// 

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center overflow-x-hidden">
      <Navbar />
      <Carousel />
      <Tickers />
      <Description />
      {/* <Banner26/> */}
      <Sponsors />
      <Gallery />
      <Review />
      {/* <iframe
        src="https://www.youtube.com/embed/Spoe76cjm9c"
        className="h-max w-full"
      ></iframe> */}
      <Events />
      <Footer />
    </div>
  );
}

export default App;
