import { Heart, ShoppingCart, Star } from 'lucide-react'
import type { Item } from './Category'

interface FeaturedProducts {
    title: string,
    subtitle: string,
    products: Item[],
}


export const FeaturedProducts = ({ title, subtitle, products }: { title: string, subtitle: string, products: Item[] }) => {
    return (
        <div className="flex flex-col gap-6">

            <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                    <h1 className="text-sm md:text-md lg:text-xl font-semibold">{title}</h1>
                    <a className="link hover:text-blue-500 text-xs md:text-sm">Click me</a>
                </div>
                <h3 className="text-xs">{subtitle}</h3>
            </div>

            <div className="flex space-between gap-6 overflow-x-auto no-scrollbar py-2">
                {
                    products.map((item, id) => (
                        <div key={id} className="relative card bg-base-100 w-40 md:w-70 h-48 md:h-80 card-hover flex-shrink-0">
                            <div className="absolute top-2 right-2 cursor-pointer">
                                <label className="swap">
                                    <input type="checkbox" />
                                    <Heart className="swap-on fill-current w-4 h-4 md:w-6 md:h-6 text-red-500" />
                                    <Heart className="swap-off w-4 h-4 md:w-6 md:h-6 text-red-500" />

                                </label>
                            </div>

                            <figure className="h-[35%] md:h-[40%] lg:h-1/2 flex items-center justify-center">

                                <img
                                    src={item.image}
                                    alt="Shoes"
                                    className="h-full" />
                            </figure>

                            <div className="card-body">
                                <div className="flex justify-between items-center gap-2">
                                    <h2 className="text-sm md:text-md lg:text-xl font-semibold">{item.name}</h2>
                                    <span className="text-xs lg:text-sm flex gap-1 items-center font-medium">
                                        <Star className="text-yellow-300 w-3 h-3 md:w-4 md:h-4" />
                                        4.9
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col gap-2">
                                        <div>
                                            <span className="line-through text-gray-500 mr-1 text-xs md:text-sm lg:text-md"> &#2547; 1299</span>
                                            <span className="badge badge-xs bg-blue-200">12%</span>
                                        </div>
                                        <p className="text-sm md:text-md lg:text-xl font-bold">&#x09F3; 1199</p>
                                    </div>
                                    <div className="bg-gray-300 rounded-full p-2 hover:bg-blue-500">
                                        <ShoppingCart className="w-3 h-3 md:w-5 md:h-5" />
                                    </div>

                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
