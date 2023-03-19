import './index.css';
import { useState } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarTable from './CalendarTable';

const Calendar = () => {
    const [date, setDate] = useState(new Date());
    const prevMonth = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
        setDate(newDate);
    }
    const nextMonth = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
        setDate(newDate);
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
        </div>
    )
}


export default Calendar;
