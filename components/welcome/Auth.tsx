import { useState } from "react";
import supabase from "../../pages/_supabase";

const Auth: React.FC<{setOtpMode: Function}> = (props)=>{
    
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [register, setRegister] = useState<boolean>(true);


    
    const login = async () => {
        props.setOtpMode(phoneNumber);
        try {
            const response = await supabase.auth.signIn({
                phone: '91' + phoneNumber,
            });

            console.log(response);

        } catch (e) {
            console.log(e);

        }
    }


    return (
        <div>
            <div className="bg-white	rounded-xl">
                <input onChange={(e) => { setPhoneNumber(e.target.value); }} className="w-full p-2 rounded-t-xl " placeholder="Enter your phone number ...." type="text" />
                {
                    (register) ? <input onChange={(e) => { setName(e.target.value); }} className="w-full p-2 mt-2 " placeholder="What we should call you..." type="text" /> : ''
                }

                <button onClick={login} id="entry_button" className="w-full  text-white bg-teal-600   py-1  hover:bg-teal-800 hover:shadow-black hover:shadow  transition-all duration-500">
                    {(register) ? 'Book a bike now' : 'Login'}
                </button>
            </div>
            <div className="mt-2 text-white cursor-pointer flex justify-end" onClick={() => { setRegister(!register) }}>
                {(register) ? 'Already have an account?' : 'Dont have an account?'}
            </div>
        </div>
    );
}

export default Auth;