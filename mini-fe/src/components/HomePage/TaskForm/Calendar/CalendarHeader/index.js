import './index.css';


const CalendarHeader = ({ prevMonth, nextMonth, date }) => {
    const months = ["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"];
    const onClickPrev = () => {
        prevMonth();
    }

    const onClickNext = () => {
        nextMonth();
    }

    return (
        <div className="calendar-header">
            <button onClick={onClickPrev}>
                <span className="material-symbols-outlined">
                  chevron_left
                </span>
            </button>
            <div className='calendar-time month'>
                <span className='calendar-time-month'>
                    {months[date.getMonth()]}
                </span>
                <span>
                    {date.getFullYear()}
                </span>
            </div>
           
            <button onClick={onClickNext}>
                <span className="material-symbols-outlined">
                    chevron_right
                </span>
            </button>
        </div>
    )
}

export default CalendarHeader;
