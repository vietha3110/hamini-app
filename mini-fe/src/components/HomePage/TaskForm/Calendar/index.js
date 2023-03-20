import './index.css';
import { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarTable from './CalendarTable';

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const [showToday, setShowToday] = useState(false);
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"];
    const prevMonth = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
        setDate(newDate);
    }
    const nextMonth = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
        setDate(newDate);
    }

    const today = {
        day: daysOfWeek[new Date().getDay()],
        date: new Date().getDate(),
        month: months[new Date().getMonth()], 
        year: new Date().getFullYear()
    }

    const onClickShowToday = () => {
        setShowToday(!showToday);
    }
    return (
        <div className='calendar'>
            
            <CalendarHeader
                prevMonth={prevMonth}
                nextMonth={nextMonth}
                date={date}
            />
            <CalendarTable
                date={date}
            />
            <div className='calendar-today'>
                {
                    !showToday && 
                    <span onClick={onClickShowToday}> Today </span>
                }
               
                {
                    showToday && 
                    <div>
                        Today is {today.day} {today.month} {today.date} {today.year}
                    </div>
                }
                
            </div>
        </div>
    )
}


export default Calendar;
