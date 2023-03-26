
const WeatherCard = () => {
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
        </div>
    )
}

export default WeatherCard;
