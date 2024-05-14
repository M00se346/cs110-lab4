
import React, {useState} from 'react';

const Sidebar = ({ timeInterval, category, onTimeIntervalChange, onCategoryChange }) => {

    const[day, setDay] = useState(true)
    const[week, setWeek] = useState(false)
    const[month, setMonth] = useState(false)
    const[emailed, setEmailed] = useState(true)
    const[viewed, setViewed] = useState(false)
    const[shared, setShared] = useState(false)


    return(
       <section>
            {/* <form>
                <button onClick={()=> {setDay(true) ; setWeek(false) ; setMonth(false); }}>Day</button>
                <button onClick={()=> {setDay(false) ; setWeek(true) ; setMonth(false); }}>Week</button>
                <button onClick={()=> {setDay(false) ; setWeek(false) ; setMonth(true); }}>Month</button>
            </form>
            <form>
                <button onClick={()=> {setEmailed(true) ; setViewed(false) ; setShared(false); }}>Emailed</button>
                <button onClick={()=> {setEmailed(false) ; setViewed(true) ; setShared(false); }}>Shared</button>
                <button onClick={()=> {setEmailed(false) ; setViewed(false) ; setShared(true); }}>Viewed</button>
            </form> */}
             {/* Time interval radio buttons */}
             <div>
                <input 
                    type="radio" 
                    id="day" 
                    name="timeInterval" 
                    value="1" 
                    checked={timeInterval === '1'} 
                    onChange={() => onTimeIntervalChange('1')} 
                />
                <label htmlFor="day">Day</label>

                <input 
                    type="radio" 
                    id="week" 
                    name="timeInterval" 
                    value="7" 
                    checked={timeInterval === '7'} 
                    onChange={() => onTimeIntervalChange('7')} 
                />
                <label htmlFor="week">Week</label>

                <input 
                    type="radio" 
                    id="month" 
                    name="timeInterval" 
                    value="30" 
                    checked={timeInterval === '30'} 
                    onChange={() => onTimeIntervalChange('30')} 
                />
                <label htmlFor="month">Month</label>
                
            </div>

            {/* Category radio buttons */}
            <div>
                <input 
                    type="radio" 
                    id="emailed" 
                    name="category" 
                    value="emailed" 
                    checked={category === 'emailed'} 
                    onChange={() => onCategoryChange('emailed')} 
                />
                <label htmlFor="emailed">Emailed</label>

                <input 
                    type="radio" 
                    id="shared" 
                    name="category" 
                    value="emailed" 
                    checked={category === 'shared'} 
                    onChange={() => onCategoryChange('shared')} 
                />
                <label htmlFor="shared">Shared</label>

                <input 
                    type="radio" 
                    id="viewed" 
                    name="category" 
                    value="viewed" 
                    checked={category === 'viewed'} 
                    onChange={() => onCategoryChange('viewed')} 
                />
                <label htmlFor="viewed">Viewed</label>
                
            </div>
        </section>
    );
}

export default Sidebar;




