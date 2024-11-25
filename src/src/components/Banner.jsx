import BannerImage from "../../assets/bannerImage.avif";
export default function Banner() {
  return (
    <div className="w-full h-[25rem] relative">
      <img src={BannerImage} alt="Banner Image" className="w-full h-full" />
      <div className="absolute top-10 left-0 right-0 w-[20rem] mx-auto">
      <div className="flex flex-col gap-4 mt-28">
        <div className="font-semibold text-5xl text-white">Cryptotracker</div>
        <div className="font-semibold text-2xl text-white">Get all info regarding crypto currencies</div>
      </div>
      </div>
    </div>
  );
}
