import { Badge, Box, Car, CreditCard, MessageCircleMore } from "lucide-react"

export const Services = () => {
    return (
        <div className="flex flex-col gpa-2">
            <div className="flex justify-end py-3 px-1 relative">
                <div className="relative group cursor-pointer text-center">
                    <MessageCircleMore />
                    <p className="w-20 absolute top-[80%] left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out group-hover:block text-sm text-black py-2">
                        Live Chat
                    </p>
                </div>
            </div>

            <div className="flex space-between gap-6 overflow-auto no-scrollbar justify-between w-full p-4">

                <div className="flex gap-2 items-center">
                    <Badge className="hover:scale-105 cursor-pointer" />
                    <div>
                        <p className="font-semibold text-sm md:text-md">Official Warranty </p>
                        <span className="text-xs">1 Year Brand Warranty</span>
                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <Car className="hover:scale-105 cursor-pointer" />
                    <div>
                        <p className="font-semibold  text-sm md:text-md">Fast Delivery </p>
                        <span className="text-xs">Get Your Order in 48 hours</span>
                    </div>

                </div>

                <div className="flex gap-2 items-center">
                    <Box className="hover:scale-105 cursor-pointer" />
                    <div>
                        <p className="font-semibold text-sm md:text-md">Easy Return</p>
                        <span className="text-xs">7 Days Retrun Policy</span>

                    </div>
                </div>

                <div className="flex gap-2 items-center">
                    <CreditCard className="hover:scale-105 cursor-pointer" />
                    <div>
                        <p className="font-semibold  text-sm md:text-md">Secure Payment </p>
                        <span className="text-xs">SSL Secure Checkout</span>

                    </div>
                </div>

            </div>
        </div>
    )
}
