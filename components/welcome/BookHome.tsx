const BookHome: React.FC = ()=>{
    return <div>
            <div className="h-20 bg-teal-600 flex flex-col justify-center">
               <span className="text-white m-auto text-2xl">
                    Bikenow
               </span>
            </div>
            <div className="p-10">
                    <div id="search"></div>
                    {/* <input type="text" id="search" className="w-full p-2 rounded-xl" placeholder="Enter Pickup Location..." /> */}
                    <input type="text" className="w-full p-2 rounded-xl mt-2" placeholder="Max time in hours you will return the bicycle" />
                    <input type="text" className="w-full p-2 rounded-xl mt-2" placeholder="Enter any coupon code (optional)" />

                    <button className="w-full mt-2  text-white bg-teal-600   py-1  hover:bg-teal-800 hover:shadow-black hover:shadow  transition-all duration-500">
                        Proceed To Pay
                    </button> 
            </div>
    </div>
} 

export default BookHome;