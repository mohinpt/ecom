import { ShoppingCart } from "lucide-react";
import smartWatch from "../assets/smartWatch.jpg";

export const Banner = () => {
    return (
        <div className="bg-violet-500 text-white rounded-md w-full p-6 flex flex-col-reverse md:flex-row gap-4">
            <div>
                <img src={smartWatch} alt="desktop" />
            </div>

            <div className="flex flex-col gap-4">
                <h1 className="font-semibold text-2xl">Amazfit GTR 4 Smartwatch</h1>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2.5">
                    <li>1.43 AMOLED Display</li>
                    <li>Bluetooth Calling</li>
                    <li>150+ Sports Modes</li>
                    <li>14-Day Battery</li>
                </ul>
                <div className="flex flex-col md:flex-row gap-4">
                    <button className="btn btn-outline rounded-full px-4 text-white md:w-[40%]">Shop Now <ShoppingCart /> </button>
                    <button className="btn bg-white rounded-full px-4 text-blue-500 md:w-[40%]">Shop Now <ShoppingCart /> </button>
                </div>
            </div>
        </div>
    )
}
