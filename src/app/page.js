import Image from "next/image";
import Header from "./sections/Header";
import AboutUs from "./sections/AboutUs";
import Services from "./sections/Services";
import WhyChooseUs from "./sections/WhyChooseUs";
import WorkingAreas from "./sections/WorkingAreas";
import StatsSection from "./sections/StatsSection";
import Testimonials from "./sections/Testimonials";
import ContactUs from "./sections/ContactUs";
import AttachedSection from "./sections/AttachedSection";

export default function Home() {
  return (
   <>
   <Header />
   <AboutUs />
   <Services />
   <WhyChooseUs />
   <WorkingAreas />
   <AttachedSection />
   <StatsSection />
   <Testimonials />
   </>
  );
}
