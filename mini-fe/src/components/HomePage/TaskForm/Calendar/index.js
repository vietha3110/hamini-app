import './index.css';
import { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarTable from './CalendarTable';

const Calendar = () => {
    const [date, setDate] = useState(new Date());
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
    return (
        <div className='calendar'>
            <div>
                Today is {today.day} {today.month} {today.date} {today.year}
            </div>
            <CalendarHeader
                prevMonth={prevMonth}
                nextMonth={nextMonth}
                date={date}
            />
            <CalendarTable
                date={date}
            />
        </div>
    )
}


export default Calendar;
