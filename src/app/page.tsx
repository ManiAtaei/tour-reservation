import BestComent from "@/components/BestComent";
import Bigbaner from "@/components/Bigbaner";
import Container from "@/components/Container";
import CoreCart from "@/components/CoreCart";
import PictureSlide from "@/components/PictureSlide";
import Questions from "@/components/Questions";
import TourCart from "@/components/TourCart";
import WhyDorna from "@/components/WhyDorna";

export default function Home() {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="mt-[6.2rem]">
        <PictureSlide />
        <WhyDorna/>
        <Container>
          <TourCart />
          <CoreCart />
          <TourCart />
          <Bigbaner/>
          <TourCart />
          <BestComent/>
          <Questions/>
        </Container>
        <br /><br /><br />
      </div>
    </div>
  );
}
