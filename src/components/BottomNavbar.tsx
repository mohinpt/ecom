import { Heart, ShoppingCart } from "lucide-react"

export const BottomNavbar = () => {
    return (
        <div className="flex justify-between items-center py-4">
            <div>
                <div className="flex items-center gap-4">

                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details >
                                <summary className="hover:bg-transparent hover:text-blue-500 active:!bg-transparent active:!opacity-100 focus:!bg-opacity-100 focus:!bg-transparent">All Categaory</summary>
                                <ul className="bg-tansparent rounded-t-none p-2">
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">1. Rod</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">2. Cement</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">3. Corrugated Sheet (Tin)</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">4. Stone & Sand</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">5. Hardware</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">6. Grocery</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">7. Cosmetics</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">8. Mobile</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">9. Electric</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">10. Electronics</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">11. Furniture</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">12. Motorcycle</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">13. Garments</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">14. Fish Feed</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">15. Poultry Feed</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">16. Cattle Feed</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">17. Ceramic</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">18. Tiles</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">19. Tire</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">20. Lubricant</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">21. Bicycle</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">22. Glass</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">23. Housing</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">24. Land Development</li>
                                    <li className="hover:text-blue-500 hover:scale-105 cursor-pointer">25. Construction Services</li>


                                </ul>
                            </details>
                        </li>
                    </ul>

                    <p className="hover:text-blue-500 hover:scale-105 cursor-pointer">Home</p>
                    <p className="hover:text-blue-500 hover:scale-105 cursor-pointer">Campaign</p>
                    <p className="hover:text-blue-500 hover:scale-105 cursor-pointer">Trending</p>
                    <p className="hover:text-blue-500 hover:scale-105 cursor-pointer">Brands</p>
                    <p className="hover:text-blue-500 hover:scale-105 cursor-pointer">Outles</p>

                </div>
            </div>

            <div className="flex items-center gap-4">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details >
                            <summary className="hover:bg-transparent hover:text-blue-500 active:!bg-transparent active:!opacity-100 focus:!bg-opacity-100 focus:!bg-transparent">English</summary>
                            <ul className="bg-tansparent rounded-t-none p-2">
                                <li className="hover:text-blue-500 cursor-pointer">Bangla</li>
                                <li className="hover:text-blue-500 cursor-pointer">Hindi</li>
                            </ul>
                        </details>
                    </li>
                </ul>


                <div tabIndex={0} className="flex gap-2">
                    <p className="indicator">
                        <Heart />
                        <span className="badge badge-xs indicator-item bg-red-500 text-white">8</span>

                    </p>
                    <p>Wishlist</p>
                </div>


                <div tabIndex={0} className="flex gap-2">
                    <p className="indicator">
                        <ShoppingCart />
                        <span className="badge badge-xs indicator-item bg-red-500 text-white">8</span>
                    </p>
                    <p>Cart</p>
                </div>

            </div>
        </div>
    )
}
