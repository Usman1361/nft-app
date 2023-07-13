import "./App.css";
import Header from "./Components/Header";
import Discover from "./Components/Discover/Discover";
import CardSection from "./Components/CardSection/CardSection";
import SlidingCardSection from "./Components/SlidingCardSection/SlidingCardSection";
import CollectionCardSection from "./Components/CollectionCardSection/CollectionCardSection";
import TopSellerSection from "./Components/TopSellerSection/TopSellerSection";
import TodayPickSection from "./Components/TodayPickSection/TodayPickSection";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Explore from "./Pages/Explore";
import Working from "./Pages/Working";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Discover />
                <CardSection />
                <SlidingCardSection />
                <CollectionCardSection />
                <TopSellerSection />
                <TodayPickSection />
              </>
            }
          />
          <Route
            path="/explore"
            element={
              <>
                <Explore />
              </>
            }
          />
          <Route path="/working" element={<Working />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
