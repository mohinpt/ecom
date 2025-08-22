import { ShoppingCart, Star } from "lucide-react";
import Countdown from "./Countdown";
import desktop from "../assets/desktop.jpg";


import headphone from "../assets/headphone.jpg";
import watch from "../assets/watch.jpg";
import speaker from "../assets/speaker.jpg";
import computer from "../assets/computer.jpg";
import microphone from "../assets/microphone.jpg";
import charger from "../assets/charger.png";


export const Category = () => {

    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            itemsCount: 25,
            image: headphone
        },
        {
            id: 2,
            name: "Smartphone Case",
            itemsCount: 40,
            image: watch
        },
        {
            id: 3,
            name: "Bluetooth Speaker",
            itemsCount: 18,
            image: speaker
        },
        {
            id: 4,
            name: "Gaming Mouse",
            itemsCount: 32,
            image: computer
        },
        {
            id: 5,
            name: "Mechanical Keyboard",
            itemsCount: 15,
            image: microphone
        },
        {
            id: 6,
            name: "USB-C Charger",
            itemsCount: 50,
            image: charger
        },
    ];

    const products2 = [
        {
            id: 7,
            name: "Smartwatch Band",
            itemsCount: 20,
            image: charger
        },
        {
            id: 8,
            name: "Laptop Stand",
            itemsCount: 10,
            image: watch
        },
        {
            id: 9,
            name: "LED Monitor",
            itemsCount: 7,
            image: speaker
        },
        {
            id: 10,
            name: "External Hard Drive",
            itemsCount: 12,
            image: computer
        }
    ];


    return (
        <div className="py-10">
            <div className="flex justify-between">
                <h1 className="text-xl font-semibold"> Explore Popular Categories</h1>
                <a className="link hover:text-blue-500">Click me</a>
            </div>
            <h3 className="text-xs mt-2">Find your perfect gadge in just one click</h3>
            <div className="flex space-between gap-6 overflow-auto no-scrollbar">
                {
                    products.map((item, id) => (
                        <div key={id} className="card bg-base-100 w-50 h-60 card-hover flex-shrink-0">
                            <figure>
                                <img
                                    src={item.image}
                                    alt="Shoes"
                                    className="h-full" />
                            </figure>
                            <div className="card-body !px-2">
                                <h2 className="card-title">{item.name}</h2>
                                <p>{item.itemsCount} items</p>
                            </div>
                        </div>

                    ))
                }
            </div>

            <div className="flex justify-between mt-10">
                <h1 className="text-xl font-semibold">New Arrivals</h1>
                <a className="link hover:text-blue-500">Click me</a>
            </div>
            <h3 className="text-xs mt-2">Fresh pick -- just landed in our store</h3>
            <div className="flex space-between gap-6 overflow-auto no-scrollbar">
                {
                    products2.map((item, id) => (
                        <div key={id} className="card bg-base-100 w-70 h-80 card-hover flex-shrink-0">
                            <figure>
                                <img
                                    src={item.image}
                                    alt="Shoes"
                                    className="h-full" />
                            </figure>
                            <div className="card-body">
                                <div className="flex justify-between items-center gap-2">
                                    <h2 className="text-xl font-semibold">{item.name}</h2>
                                    <span className="text-md flex gap-1 font-medium"> <Star size={20} className="text-yellow-300" /> 4.9</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col gap-2">
                                        <div>
                                            <span className="line-through text-gray-500 mr-1"> &#2547; 1299</span>
                                            <span className="badge badge-xs bg-blue-200">12%</span>
                                        </div>
                                        <p className="font-bold text-2xl">&#x09F3; 1199</p>
                                    </div>
                                    <div className="bg-gray-300 rounded-full p-2 hover:bg-blue-500">
                                        <ShoppingCart />
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="bg-yellow-300 rounded-md w-full my-10 p-6 grid grid-cols-2 gap-4">
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

        </div>
    )
}
