
export interface Item {
    id: number,
    name: string,
    itemsCount: number,
    image: string,
}

export const Category = ({ title, subtitle, products }: { title: string, subtitle: string, products: Item[] }) => {

    return (
        <div className="flex flex-col gap-6">

            <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <h1 className="text-sm md:text-md lg:text-xl font-semibold"> {title}</h1>
                    <a className="link hover:text-blue-500 text-xs md:text-sm">Click me</a>
                </div>
                <h3 className="text-xs"> {subtitle}</h3>
            </div>

            <div className="flex space-between gap-6 overflow-auto no-scrollbar py-2">
                {
                    products.map((item) => (
                        <div key={item.id} className="card bg-base-100 w-36 md:w-50 h-40 md:h-60 card-hover flex-shrink-0">
                            <figure>
                                <img
                                    src={item.image}
                                    alt="Shoes"
                                    className="h-full" />
                            </figure>
                            <div className="card-body !px-2">
                                <h2 className="card-title text-sm md:text-md lg:text-xl">{item.name}</h2>
                                <p className="text-xs md:text-sm lg:text-md">{item.itemsCount} items</p>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}
