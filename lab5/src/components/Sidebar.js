import React, { useState , useEffect} from 'react';

const Sidebar = ({ onTermChange }) => {
    const [timeFilter, setTimeFilter] = useState({ day: true, week: false, month: false });
    const [categorySortby, setCategorySortby] = useState({ emailed: true, shared: false, viewed: false });

    const timeFilterClick = (time) => {
        onTermChange(time, categorySortby); // Pass both time filter and category sortby
        setTimeFilter({ day: time === '1', week: time === '7', month: time === '30' });
    };

    const categorySortbyClick = (category) => {
        onTermChange(timeFilter, category); // Pass both time filter and category sortby
        setCategorySortby({ emailed: category === 'emailed', shared: category === 'shared', viewed: category === 'viewed' });
    };

    return (
        <>
        <div className="Filter">
            <button onClick={() => timeFilterClick('1')} className={timeFilter.day ? 'selected' : ''}>Day</button>
            <button onClick={() => timeFilterClick('7')} className={timeFilter.week ? 'selected' : ''}>Week</button>
            <button onClick={() => timeFilterClick('30')} className={timeFilter.month ? 'selected' : ''}>Month</button>
        </div>
        <div className="Sort By">
            <button onClick={() => categorySortbyClick('emailed')} className={categorySortby.emailed ? 'selected' : ''}>Emailed</button>
            <button onClick={() => categorySortbyClick('shared')} className={categorySortby.shared ? 'selected' : ''}>Shared</button>
            <button onClick={() => categorySortbyClick('viewed')} className={categorySortby.viewed ? 'selected' : ''}>Viewed</button>
        </div>
        </>
    );
}

export default Sidebar
