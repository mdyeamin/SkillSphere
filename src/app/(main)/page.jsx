import HeroSection from "@/components/Home/HeroSection";
import LearnFromBest from "@/components/Home/LearnFromBest";
import MasterArt from "@/components/Home/MasterArt";
import PopularCourse from "@/components/Home/PopularCourse";
import ReadyToTransForm from "@/components/Home/ReadyToTransForm";
import TrendingCourse from "@/components/Home/TrendingCourse";




export default function Home() {
  return (
    <div>
     <HeroSection/>
     <PopularCourse/>
     <MasterArt/>
     <TrendingCourse/>
     <LearnFromBest/>
     <ReadyToTransForm/>
    </div>
  );
}
