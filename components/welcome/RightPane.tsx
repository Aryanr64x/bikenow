import React from 'react';
const RightPane: React.FC = ()=>{
    return (
        <div className="basis-1/2 bg-teal-600 flex flex-col justify-center">
              <div>
                  <div className="m-auto bg-white w-96">
                       <input className="w-full p-2"  placeholder="Enter your phone number ...." type="text" />
                        <button className="w-full  text-white bg-teal-600   py-1  hover:bg-teal-800 hover:shadow-black hover:shadow  transition-all duration-500">
                             Book a bike now 
                        </button>

                  </div>
              </div>
        </div>
    );
}

export default RightPane;