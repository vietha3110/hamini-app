import { useState } from "react";
import chick from '../../assets/games/chick.png';
const Games = () => {
    const [numCard, setNumCards] = useState(null);
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='p-2'>
                <div className='m-4 text-xl flex flex-row items-center gap-2'>
                    <img
                        src={chick}
                        alt='chicken'
                        className='h-1/4 w-1/4 rounded-full'
                    />
                    <h1>Welcome to the game</h1>
                </div>
                
            </div>
        </div>
    )
}

export default Games;
