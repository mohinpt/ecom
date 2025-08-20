
export const Hero = () => {
    return (
        <div className="grid grid-cols-7 grid-rows-5 gap-4 h-[80vh] p-2">
            <img src="src/assets/hero.jpg" className="w-full h-full col-span-5 row-span-3 object-cover rounded-md"/>
            <img src="src/assets/images.jpg"  className="w-full h-full col-span-2 row-span-3 object-cover rounded-md"/>
            <img src="src/assets/download.jpg" className="w-full h-full col-span-4 row-span-2 object-cover rounded-md"/>
            <img src="src/assets/images 2.jpg"  className="w-full h-full col-span-3 row-span-2 object-cover rounded-md"/>
        </div>
    )
}
