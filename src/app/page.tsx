import BestComent from "@/components/BestComent";
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

          <CoreCart />

          <TourCart />

          <div className="mt-8 w-full flex flex-col md:flex-row-reverse h-[328px]">
            <div className="w-full bg-[#FFD1B3] flex items-center justify-center gap-4 flex-col py-10 rounded-t-lg md:w-[400px] md:rounded-l md:rounded-t-none md:rounded-l-lg  ">
              <p className="font-xbold text-[32px]">
                کاخ دروازه ملل
              </p>

              <p className="font-xbold text-[16px]">
                ارگ پادشاهی هخامنشی
              </p>
            </div>

            <div className="h-full w-full">
              <img src="/banner/kakh.png" alt="" className="rounded-b md:rounded-r-l md:rounded-none h-full w-full " />
            </div>
 
          </div>

          <TourCart />

          <BestComent/>

        </Container>

        

        <br /><br /><br />
      </div>
    </div>
  );
}
