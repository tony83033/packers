
import Hero from "@/components/customComponent/Hero";
import OurWorkSection from "@/components/customComponent/Work";
import AboutUsSection from "@/components/customComponent/AboutUs";
import LogisticsServices from "@/components/customComponent/Services";
import GetStartedCTA from "@/components/customComponent/GetStart";
import GalleryCarousel from "@/components/customComponent/Gallery";
export default function Home() {
  return (
 <>
 <Hero />
 <OurWorkSection />
 <AboutUsSection />
 <GalleryCarousel />
 <LogisticsServices />
 <GetStartedCTA />
 </>
  );
}
