import { useRouter } from "next/router";
import { useState } from "react";
import supabase from "../../pages/_supabase";

const OtpField: React.FC<{phoneNumber:string}> = (props)=>{
    const [otp, setOtp] = useState<string>('');
    const router = useRouter();
    
    const submitOtp = async()=>{
        try {
         await supabase.auth.verifyOTP({
               phone: '91' + props.phoneNumber,
               token: otp,
           });
    // Proceed ahead
       router.push('/home');
       
       } catch (e) {
           console.log(e);
       }
    };


    return (
    <div>
        <input onChange={(e) => { setOtp(e.target.value); }} className="w-full p-2 rounded-t-xl " placeholder="Enter Otp.." type="text" />
        <button onClick={submitOtp} className="w-full  text-white bg-teal-600   py-1  hover:bg-teal-800 hover:shadow-black hover:shadow  transition-all duration-500">
            Submit
        </button>
    </div>
    );
}

export default OtpField;