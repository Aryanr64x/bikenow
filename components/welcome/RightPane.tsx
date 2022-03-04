import supabase from '../../pages/_supabase';
import React, { useEffect } from 'react';

import { useState } from 'react';
import OtpField from './Otp';
import Auth from './Auth';
const RightPane: React.FC = () => {

    const [otpMode, setOptMode] = useState<boolean>(false);
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const setOtpMode = (number: string)=>{
        setOptMode(true);
        setPhoneNumber(number);
    }






    return (
        <div className="basis-1/2 bg-teal-600 flex flex-col justify-center">
            <div id="recaptcha-container"></div>
            <div>
                <div className="m-auto  w-96 ">
                    {
                        (!otpMode) ? (<Auth  setOtpMode={setOtpMode}/>) : (
                           <OtpField phoneNumber={phoneNumber}/>
                        )
                    }
                </div>

            </div>
        </div>
    );
}

export default RightPane;