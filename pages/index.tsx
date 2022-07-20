import type { NextPage } from "next";
import FooterBanner from "../components/FooterBanner";
import HeroBanner from "../components/HeroBanner";

const Home: NextPage = () => {
  return (
    <main>
      <HeroBanner />
      <div>
        <h2>Best Selling Products</h2>
        <p>Here</p>
      </div>
      <div>Products will be mapped here</div>
      <FooterBanner />
    </main>
  );
};

export default Home;
