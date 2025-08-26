
import headphone from "../assets/headphone.jpg";
import watch from "../assets/watch.jpg";
import speaker from "../assets/speaker.jpg";
import computer from "../assets/computer.jpg";
import microphone from "../assets/microphone.jpg";
import charger from "../assets/charger.png";
import { PromoBanner } from './PromoBanner';
import { Category } from './Category';
import { FeaturedProducts } from './FeaturedProducts';
import { Banner } from "./Banner";

export const ProductShowcase = () => {

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
        <div className="flex flex-col gap-20 py-10">
            <Category
                title="Explore Popular Categories"
                subtitle="Find your perfect gadge in just one click."
                products={products} />

            <FeaturedProducts
                title="New Arrivals"
                subtitle="Fresh picks -- jus landed in out store."
                products={products2} />

            <PromoBanner />

            <FeaturedProducts
                title="Popular Products"
                subtitle="Fresh picks -- jus landed in out store."
                products={products2} />

            <Banner />

            <FeaturedProducts
                title="Mobile Phone"
                subtitle="Fresh picks -- jus landed in out store."
                products={products2} />


        </div>
    )
}
