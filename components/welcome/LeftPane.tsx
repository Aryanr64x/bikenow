import React from "react";

const LeftPane: React.FC = ()=>{
    return (
        <div className="basis-1/2 flex flex-col pt-10">
        <div className="basis-1/2">
        <img  className="m-auto"  src="https://t4.ftcdn.net/jpg/02/66/07/99/360_F_266079918_sFay2Jtbdxe1PaX6z0YW1vpZ48c6fKPN.jpg " alt="Use bicyles whereevr u go" />
        </div>
    
        <div className="basis-1/2 pt-10">  
         <p className="text-center text-2xl font-bold">
           BIKENOW
         </p>
         <p className="text-center font-bold px-10">
            Bicycle Renting was never so easier . We at Bikenow are changing the way people
            transport within cities .  All towards building a nature friendly lifestyle. 😊😊

         </p>
        </div>
      </div>
    );
}
export default LeftPane;
