import Main from "../../components/Main";
import About from "../../components/About";
import Rooms from "../../components/Rooms";
import Destination from "../../components/Destinations";
import Adventures from "../../components/Adventures";
import Restaurant from "../../components/Restaurant";
import Orders from "../../components/Orders";
import Enquiry from "../../components/Enquiry";
import Location from "../../components/Location";
import Footer from "../../components/Footer";
import { destinations } from "../../utils/Constants";

const Home = () => {
  return (
    <>
      <Main />
      <About />
      <Rooms />

      {destinations.map((destination, index) => (
        <Destination
          key={index}
          title={destination.title}
          description={destination.description}
          images={destination.images}
          reverse={destination.reverse}
          delay={destination.delay}
        />
      ))}

      <Adventures />
      <Restaurant />
      <Orders />
      <Enquiry />
      <Location />
      <Footer />
    </>
  );
};

export default Home;