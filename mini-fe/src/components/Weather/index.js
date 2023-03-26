import { useState } from "react";
import WeatherCard from "./WeatherCard";

import Location from "./Location";
const Weather = () => {
    const [showCard, setShowCard] = useState(false);

    // const icons = [
    //     {
    //         id: 1, 
    //         className: "material-symbols-outlined hover:scale-110 cursor-pointer",
    //         name: "sunny"
    //     },
    //     {
    //         id: 2, 
    //         className: "material-symbols-outlined hover:scale-110 cursor-pointer",
    //         name: "air"
    //     },
    //     {
    //         id: 1, 
    //         className: "material-symbols-outlined hover:scale-110 cursor-pointer",
    //         name: "rainy"
    //     },
    //     {
    //         id: 1, 
    //         className: "material-symbols-outlined hover:scale-110 cursor-pointer",
    //         name: "thunderstorm"
    //     },
    //     {
    //         id: 1, 
    //         className: "material-symbols-outlined hover:scale-110 cursor-pointer",
    //         name: "cloudy_snowing"
    //     }
    // ]


    return (
        <div className="flex flex-col items-center bg-gray-600 w-full h-screen text-white">
            <div className="flex justify-center items-center w-full">
                <h1 className="">
                    Weather
                </h1>
            </div>
            {
                !showCard && <Location open={()=>setShowCard(true)} />
            } 
            {
                showCard && <WeatherCard/>
            }
            
        </div>
    )
}

export default Weather;
