
function convertKtoF(temp) {
    return ((temp - 273.15) * (9 / 15) + 32).toFixed(0);
}
const WeatherCard = ({ location, main, sys, weather, wind }) => {
    const url = "https://openweathermap.org/img/wn/";
    return (
        <div className="flex w-full justify-center items-center h-96 py-2">
            <div className="flex border rounded-md flex-col w-96 p-4 bg-white text-black">
                <div className="p-2">
                    <div className="flex justify-center items-center text-3xl">
                        <span class="material-symbols-outlined">
                            location_on
                        </span>                       
                        {location}
                    </div>
                    <div>
                        <div className='flex justify-center items-center flex-row w-full'>
                            <img
                                src={url + weather.icon + "@2x.png"}
                                alt="cloud"
                                className='w-20 h-30'
                            />
                           
                             <p className='font-bold text-5xl'>
                                {convertKtoF(main.temp)}°
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className="uppercase">
                                {weather.description}
                            </div>
                            <p className="italic text-xs font-bold">
                                Feels like {convertKtoF(main.feels_like)}°
                            </p>
                            <div className="flex flex-row">
                                <p className="px-2">
                                    H: {convertKtoF(main.temp_max)}°
                                </p>
                                <p className="px-2">
                                    L: {convertKtoF(main.temp_min)}°
                                </p>
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className="flex flex-row w-full">
                    <div className="w-1/2 flex flex-row justify-center">
                        <span class="material-symbols-outlined text-4xl">
                            water
                        </span>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold">
                                {main.humidity}%
                            </span>
                            <span className="text-xs">
                                Humidity
                            </span>
                        </div>
                    </div>
                    <div className="w-1/2 flex flex-row justify-center">
                        <span class="material-symbols-outlined text-4xl">
                            air
                        </span>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold">
                                {wind.speed} km/h
                            </span>
                            <span className="text-xs">
                                Wind Speed
                            </span>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;
