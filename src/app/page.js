import Image from "next/image";
import Header from "./sections/Header";
import AboutUs from "./sections/AboutUs";
import Services from "./sections/Services";
import WhyChooseUs from "./sections/WhyChooseUs";
import WorkingAreas from "./sections/WorkingAreas";

export default function Home() {
  return (
   <>
   <Header />
   <AboutUs />
   <Services />
   <WhyChooseUs />
   <WorkingAreas />
   </>
  );
}
