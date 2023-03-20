import './index.css';
function formatDate(date) {
    return [date.getDay(), date.getDate()];
}

const CalendarTable = ({date}) => {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const currMonth = date.getMonth() + 1;
    const currDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const daysInMonth = [];
    
    while (currDate.getMonth() + 1 === currMonth) {
        const formatedDate = formatDate(new Date(currDate));
        daysInMonth.push(formatedDate);
        currDate.setDate(currDate.getDate() + 1);
    }
    const preDivs = daysInMonth[0][0];
    const prevDate = new Date(date.getFullYear(), date.getMonth(), 0);
    const daysPrevMonth = new Array(preDivs); 
    for (let i = preDivs - 1; i >= 0; i--) {
        const formatedDate = formatDate(new Date(prevDate));
        daysPrevMonth[i] = formatedDate;
        prevDate.setDate(prevDate.getDate() - 1);
    }
    const nextDivs = 42 - preDivs - daysInMonth.length;
    const nextDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    const daysNextMonth = [];
    for (let i = 0; i < nextDivs; i++) {
        const formatedDate = formatDate(new Date(nextDate));
        daysNextMonth.push(formatedDate);
        nextDate.setDate(nextDate.getDate() + 1);
    }


    return (
        <>
            <div className='calendar-table'>
                <div className='calendar-table-day'>
                    {daysOfWeek.map(day => (
                        <div key={day} className='calendar-div-date'>
                            <span>{day}</span>
                        </div>
                    ))}
                </div>
                <div className='calendar-table-date'>
                    {daysPrevMonth?.length > 0 && 
                        daysPrevMonth.map(day => (
                            <div key={day[1]} className={day[0] === 0 ? 'calendar-table-prevdate calendar-div-dateSun':'calendar-table-prevdate calendar-div-date'}>
                                <div>{day[1]}</div>
                            </div>
                        ))
                    }
                    {daysInMonth.map(day => (
                        <div key={day[1]} className={day[0] === 0 ? 'calendar-table-prevdate calendar-div-dateSun':'calendar-table-currdate calendar-div-date'}>
                            <div>{day[1]}</div>
                        </div>
                    ))}
                    {daysNextMonth?.length > 0 && 
                        daysNextMonth.map(day => (
                            <div key={day[1]} className={day[0] === 0 ? 'calendar-table-prevdate calendar-div-dateSun':'calendar-table-nextdate calendar-div-date'}>
                                <div>{day[1]}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='calendar-today'>
                <span> Today </span>
            </div>
        </>
    )
}

export default CalendarTable;
