import { NextPage } from "next";
import { useEffect } from "react";
import supabase from "./_supabase";
import Map from "../components/welcome/Map";
import BookHome from "../components/welcome/BookHome";
const home: NextPage = ()=>{

    return (
        <div  className="h-screen flex">
                <div className="basis-1/3">
                    <BookHome />
                </div>
                <div className="basis-2/3">
                    <Map />
                </div>
        </div>
    );

}

export default home;