import { useState } from "react";
const Location = () => {
    const [location, setLocation] = useState("");

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
                <div className="flex justify-center items-center w-60">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-56 h-10 p-3">
                    <input
                        type="text"
                        name="location"
                        id="location"
                        autoComplete="location"
                        value={location}
                        onChange={(e)=>setLocation(e.target.value)}    
                        className="block flex-1 border-0 bg-transparent text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 text-left"
                    />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <button className="flex justify-center items-center">
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
