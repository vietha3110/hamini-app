export default function SearchBar() {
    return (
        <div className='w-full h-[40px] flex flex-row border-2 rounded-full border-gray-200 items-center bg-gray-200'>
            <div className='p-2 text-black'>
                <i className='fa-solid fa-magnifying-glass'></i>
            </div>
            <div className='w-full'>
                <input
                    type='text'
                    placeholder='Search something in chat'
                    className='text-slate-300 w-full h-full bg-gray-200 font-light'
                />
            </div>
        </div>
    )
}
