import Image from "next/image";
import banner from "../../public/assets/banner1.png";

const Hero = () => {
  return (
    <div className="relative border shadow-2xl mx-10 my-8 overflow-hidden rounded-2xl bg-gray-900">
      <div className="relative w-full h-[300px] md:h-[400px] ">
        <Image
          src={banner}
          alt="Banner of Book Hopper"
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      <div className="absolute bottom-10 left-10 z-10 flex flex-col items-start space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold italic text-white tracking-wide">
          Book<span className="text-purple-500">Hopper</span>
        </h1>
        <p className="text-gray-200 text-sm md:text-base max-w-md">
          Your fast, modern online book borrowing platform. Explore stories,
          tech, and science instantly.
        </p>
        <button className="btn btn-accent bg-red-600 hover:bg-red-700 text-white border-none px-6">
          Browse Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
