import { useState } from "react";
import WeatherCard from "./WeatherCard";

import Location from "./Location";
const Weather = () => {
    const [showCard, setShowCard] = useState(false);
    const [location, setLocation] = useState("");
    const [main, setMain] = useState({});
    const [sys, setSys] = useState({});
    const [weather, setWeather] = useState({});
    const [wind, setWind] = useState({});


    return (
        <div className="flex flex-col items-center bg-gray-600 w-full h-screen text-white">
            <div className="flex justify-center items-center w-full">
                <h1 className="">
                    Weather
                </h1>
            </div>
            {
                !showCard &&
                <Location
                    open={() => setShowCard(true)}
                    updateLocation={setLocation}
                    location={location}
                    setMain={setMain}
                    setSys={setSys}
                    setWeather={setWeather}
                    setWind={setWind}
                />
            } 
            {
                showCard &&
                <WeatherCard
                    location={location}
                    main={main}
                    sys={sys}
                    weather={weather}
                    wind={wind}
                />
            }
            
        </div>
    )
}

export default Weather;
