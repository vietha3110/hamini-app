import { useEffect, useState } from "react";
import citiesData from "./cities";
import CitiesResult from "./CitiesResult";
const WEATHER_KEY = "cac24be2c06779e11d09bccf806e250d";

const Location = ({open, updateLocation,location, setMain, setSys,setWeather, setWind}) => {
  
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [listCities, setListCities] = useState([]);

    useEffect(() => {
        const listResult = [];
        if (location && location.trim() === "") {
            setShowResult(false);
            setListCities([]);
            return;
        }
        setShowResult(true);
        const searchCity = location.toLowerCase();
        for (let key in citiesData) {
            if (key.toLowerCase().includes(searchCity)) {
                listResult.push([key, citiesData[key]]);
            }
        }
        
        setListCities(listResult);
    },[location])



    const onSubmit = () => {
        setListCities([]);
        setShowResult(false);
        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${WEATHER_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                setLat(data[0].lat);
                setLon(data[0].lon);
            })
            .catch((err) => {
                console.log(err);
            })
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                setMain(data.main);
                setWeather(data.weather[0]);
                setWind(data.wind);
                setSys(data.sys);
                open();
            })

        
    }

    const onChangeLocation = (e) => {
        updateLocation(e.target.value);
    }

    return (
        <div className="flex justify-center items-center w-full h-screen flex-col">
            <div className="m-1">
                <span>Enter your location:</span>
            </div>
            <div className="flex flex-row border rounded-md w-80 h-20">
                <div className="w-10 flex justify-center items-center">
                    <span class="material-symbols-outlined">
                        location_on
                    </span>
                </div>
                <div className="flex justify-center items-center w-60 relative">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-56 h-10 p-3">
                    <input
                        type="text"
                        name="location"
                        id="location"
                        autoComplete="location"
                        value={location}
                        onChange={e => onChangeLocation(e)}    
                        className="block flex-1 border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 text-left"
                    />
                    </div>
                    {
                        showResult && <CitiesResult cities={listCities} />
                    }
                </div>
                <div className="flex justify-center items-center">
                    <button
                        className="flex justify-center items-center"
                        onClick={onSubmit}
                    >
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Location;
