export default function SideBar() {
    return (
        <nav className='w-[50px] mx-4 relative h-full bg-white flex flex-col items-center justify-between border-r border-r-black'>
            <div className='w-[50px] p-2 flex items-center justify-center h-[50px] hover:bg-gray-100'>
                <i className='fa-regular fa-comment'></i>
            </div>
            <div className='w-[50px] p-2 flex items-center justify-center h-[50px] hover:bg-gray-100'>
                <i className='fa-solid fa-user-group'></i>
            </div>
            <div className='w-[50px] p-2 flex items-center justify-center h-[50px] hover:bg-gray-100'>
                <i className='fa-solid fa-user-plus'></i>
            </div>
        </nav>
    )
}
