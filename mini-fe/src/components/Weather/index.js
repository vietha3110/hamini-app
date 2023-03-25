import { useState } from "react";

import Location from "./Location";
const Weather = () => {

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
            {/* <div className="flex w-full justify-center items-center h-96 ">
                <div className="flex border rounded-md flex-col w-80 h-80 px-2 bg-white text-black">
                    <div className="my-2">
                        <div className="flex flex-row">
                            <div className="w-10 flex justify-center items-center">
                                <span class="material-symbols-outlined">
                                    location_on
                                </span>
                            </div>
                            <span>Seattle</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            Icon weather rain/sun...
                        </div>
                        <div>
                            degree
                            <div>
                                detail
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>humid</div>
                        <div>wind</div>
                    </div>
                </div>
            </div> */}

            <Location/>
        </div>
    )
}

export default Weather;
