import SideBar from './SideBar'
import ChatList from './ChatList'

export default function Chat() {
    return (
        <div className='w-full h-full flex'>
            <SideBar/>
            <ChatList/>
        </div>
    )
}
