
export const Category = () => {

    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            itemsCount: 25,
            image: "src/assets/headphone.jpg"
        },
        {
            id: 2,
            name: "Smartphone Case",
            itemsCount: 40,
            image: "src/assets/watch.jpg"
        },
        {
            id: 3,
            name: "Bluetooth Speaker",
            itemsCount: 18,
            image: "src/assets/speaker.jpg"
        },
        {
            id: 4,
            name: "Gaming Mouse",
            itemsCount: 32,
            image: "src/assets/computer.jpg"
        },
        {
            id: 5,
            name: "Mechanical Keyboard",
            itemsCount: 15,
            image: "src/assets/microphone.jpg"
        },
        {
            id: 6,
            name: "USB-C Charger",
            itemsCount: 50,
            image: "src/assets/charger.png"
        },
    ];

    const products2 = [
        {
            id: 7,
            name: "Smartwatch Band",
            itemsCount: 20,
            image: "src/assets/charger.png"
        },
        {
            id: 8,
            name: "Laptop Stand",
            itemsCount: 10,
            image: "src/assets/watch.jpg"
        },
        {
            id: 9,
            name: "LED Monitor",
            itemsCount: 7,
            image: "src/assets/speaker.jpg"
        },
        {
            id: 10,
            name: "External Hard Drive",
            itemsCount: 12,
            image: "src/assets/computer.jpg"
        }
    ]

    return (
        <div className="py-10">
            <div className="flex justify-between">
                <h1 className="text-xl font-semibold"> Explore Popular Categories</h1>
                <a className="link hover:text-blue-500">Click me</a>
            </div>
            <h3 className="text-xs mt-2">Find your perfect gadge in just one click</h3>
            <div className="grid grid-cols-6 gap-2 mt-10 px-4">
                {
                    products.map((item, id) => (
                        <div key={id} className="card bg-base-100 w-50 h-60 card-hover">
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
            <div className="grid grid-cols-4 gap-2 mt-10 px-4">
                {
                    products2.map((item, id) => (
                        <div key={id} className="card bg-base-100 w-70 h-80 card-hover">
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

        </div>
    )
}
