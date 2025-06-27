
import Hero from "@/components/customComponent/Hero";
import OurWorkSection from "@/components/customComponent/Work";
import AboutUsSection from "@/components/customComponent/AboutUs";
import LogisticsServices from "@/components/customComponent/Services";
import GetStartedCTA from "@/components/customComponent/GetStart";
import GalleryCarousel from "@/components/customComponent/Gallery";
import MovingServiceLanding from "@/components/customComponent/TrustedPatners";
import MainBranches from "@/components/customComponent/Branch";
export default function Home() {
  return (
 <>
 <Hero />
 <OurWorkSection />
 <MovingServiceLanding/>
 <AboutUsSection />
 <GalleryCarousel />
 <LogisticsServices />
 <MainBranches/>
 <GetStartedCTA />
 </>
  );
}
