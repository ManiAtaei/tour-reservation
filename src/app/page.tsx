import Container from "@/components/Container";
import CoreCart from "@/components/CoreCart";
import PictureSlide from "@/components/PictureSlide";
import TourCart from "@/components/TourCart";

export default function Home() {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="mt-24">
        <PictureSlide />
        <div className="w-full mt-8">
          <img className="w-full rounded-xl" src="/banner/dorna.png" alt="why ? dorna !" />
        </div>
        <Container>
          <TourCart />

          <CoreCart/>

        </Container>
      </div>
    </div>
  );
}
