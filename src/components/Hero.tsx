import hero from "../assets/hero.jpg";
import images from "../assets/images.jpg";
import download from "../assets/download.jpg";
import images2 from "../assets/images 2.jpg";
export const Hero = () => {
    return (
    <div className="grid grid-cols-7 grid-rows-5 gap-4 h-[80vh] p-2">
      <img
        src={hero}
        alt="hero"
        className="w-full h-full col-span-5 row-span-3 object-cover rounded-md"
      />
      <img
        src={images}
        alt="images"
        className="w-full h-full col-span-2 row-span-3 object-cover rounded-md"
      />
      <img
        src={download}
        alt="download"
        className="w-full h-full col-span-4 row-span-2 object-cover rounded-md"
      />
      <img
        src={images2}
        alt="images2"
        className="w-full h-full col-span-3 row-span-2 object-cover rounded-md"
      />
    </div>
    )
}
