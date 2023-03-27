function convertKtoF(temp) {
    return ((temp - 273.15) * (9 / 15) + 32).toFixed(0);
}
const WeatherCard = ({ location, main, sys, weather, wind }) => {
    const temp = convertKtoF(main.temp);
    return (
        <div className="flex w-full justify-center items-center h-96 ">
            <div className="flex border rounded-md flex-col w-80 h-80 px-2 bg-white text-black">
                <div className="my-2">
                    <div className="flex flex-row">
                        <div className="w-10 flex justify-center items-center">
                            <span class="material-symbols-outlined">
                                location_on
                            </span>
                        </div>
                        <span className="capitalize">{location}</span>
                    </div>
                </div>
                <div>
                    <div>
                        Icon weather rain/sun...
                    </div>
                    <div>
                        {temp} F
                        <br />
                        <p>
                            Feels like {convertKtoF(main.feels_like)} F
                        </p>
                        <div>
                            {weather.description}
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        Humidity: {main.humidity}%
                    </div>
                    <div>
                        Wind Speed: {wind.speed} km/h
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCard;
