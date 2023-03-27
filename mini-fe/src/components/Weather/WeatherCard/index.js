import Cloud from '../../../assets/weather/suncloud.png'

function convertKtoF(temp) {
    return ((temp - 273.15) * (9 / 15) + 32).toFixed(0);
}
const WeatherCard = ({ location, main, sys, weather, wind }) => {
    return (
        <div className="flex w-full justify-center items-center h-96 ">
            <div className="flex border rounded-md flex-col w-96 h-80 px-2 bg-white text-black">
                <div className="my-2">
                    <div className="flex flex-row">
                        <div className="w-10 flex justify-center items-center">
                            <span class="material-symbols-outlined">
                                location_on
                            </span>
                        </div>
                        <span className="capitalize font-bold">{location}</span>
                    </div>
                </div>
                <div>
                    <div>
                       Today's Report
                    </div>
                    <div>
                        <div className='flex justify-center items-center'>
                            <img
                                src={Cloud}
                                alt="cloud"
                                className='w-24 h-30'
                            />
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <p className='font-bold text-lg'>
                                {convertKtoF(main.temp)} F
                            </p>
                            <p>
                                Feels like {convertKtoF(main.feels_like)} F
                            </p>
                            <div>
                                {weather.description}
                            </div>
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
