import { ListFilter, Phone, Search, Square } from 'lucide-react'; // Named import from main package

export const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm justify-between  px-4 sm:px-6 md:px-10 lg:px-20 sticky top-0 z-10">
            <div className="flex justify-between items-center w-[50%] md:w-[40%]">
                <Square />
                <div className="flex gap-2 items-center justify-end">
                    <div className="flex items-center gap-2 bg-blue-400/50 rounded-full border border-white py-1 px-2 flex-shrink">
                        <Search size={15} />
                        <input className="outline-none w-full" type="text" name="" id="" placeholder="search..." />
                    </div>
                    <ListFilter className="bg-blue-500 rounded-full p-1"/>
                </div>
            </div>

            <div className="dropdown md:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                </div>
                <div
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow relative right-0">
                    <div className="flex gap-1 items-center">
                        <Phone />
                        <div>
                            <p className="text-xs">Call us now</p>
                            <p>0987968398644</p>
                        </div>
                    </div>
                    <button className="btn bg-blue-500 text-white rounded-full px-8">Login</button>
                </div>
            </div>

            <div className="hidden md:flex gap-4">
                <div className="flex gap-1 items-center">
                    <Phone />
                    <div>
                        <p className="text-xs">Call us now</p>
                        <p>0987968398644</p>
                    </div>
                </div>
                <button className="btn bg-blue-500 text-white rounded-full px-8">Login</button>
            </div>

        </div>

    )
}
