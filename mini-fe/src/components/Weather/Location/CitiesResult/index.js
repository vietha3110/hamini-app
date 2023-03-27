

const CitiesResult = ({ cities }) => {
    return (
        <div className="absolute inset-x-0 top-12 border m-3 z-50 bg-white rounded-sm h-16 text-black">
            {
                cities?.length > 0 && 
                cities.map(citi => (
                    <div>
                        {citi}
                    </div>
                ))
            }
        </div>
    )
}

export default CitiesResult;
