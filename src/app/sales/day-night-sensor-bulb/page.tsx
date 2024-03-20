import FeaturesOfProduct from "./components/featuresOfProduct/FeaturesOfProduct";
import InformationSection from "./components/informationSection/InformationSection";
import OurServices from "./components/ourServices/OurServices";
import OvercomeYourProblem from "./components/overcomeYourProblem/OvercomeYourProblem";
import ProductBanner from "./components/productBanner/ProductBanner";
import ProductPrice from "./components/productPrice/ProductPrice";
import ProductReplacement from "./components/productReplacement/ProductReplacement";
import ProductVideo from "./components/productVideo/ProductVideo";
import UseOfTheProduct from "./components/useOfTheProduct/UseOfTheProduct";
const DayNightSensorBulbPage = () => {
  return (
    <div>
      <ProductBanner />
      <OvercomeYourProblem />
      <ProductVideo />
      <ProductPrice />
      <FeaturesOfProduct />
      <UseOfTheProduct />
      <InformationSection />
      <OurServices />
      <ProductReplacement />
    </div>
  );
};

export default DayNightSensorBulbPage;