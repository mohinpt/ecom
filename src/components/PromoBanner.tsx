
import Countdown from "./Countdown";
import desktop from "../assets/desktop.jpg";
import { ShoppingCart } from "lucide-react";


export const PromoBanner = () => {
    return (
        <div className="bg-yellow-300 rounded-md w-full p-6 flex flex-col md:flex-row gap-4">
            <div className="flex flex-col gap-4 items-center">
                <h1 className="font-semibold text-2xl">SALE FEVER</h1>
                <p className="text-3xl">16% off Everything</p>
                <p>Offer ends in</p>
                <Countdown />
                <button className="btn btn-neutral rounded-full px-4 w-full md:w-[55%]">Shop Now <ShoppingCart /> </button>
            </div>
            <div>
                <img src={desktop} alt="desktop" />
            </div>
        </div>
    )
}
