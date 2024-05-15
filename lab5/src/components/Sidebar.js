
import React, {useState} from 'react';

import './Sidebar.css';
import SearchBar from './SearchBar';


const Sidebar = ({ timeInterval, category, onTimeIntervalChange, onCategoryChange, setPossiblePages, setSearchTerm, setPage}) => {

    const[day, setDay] = useState(true);
    const[week, setWeek] = useState(false);
    const[month, setMonth] = useState(false);
    const[emailed, setEmailed] = useState(true);
    const[viewed, setViewed] = useState(false);
    const[shared, setShared] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    //const [searchTerm, setSearchTerm] = useState('');

    
    const handleSearch = (term) => {
        if(term > 15){
            setErrorMessage('Search term is greater than 15.');
        } 
        else{
            setErrorMessage(''); // reset error message
            setSearchTerm(term); 
            setPossiblePages(Math.ceil(term/6));
            setPage(1);
        }
    };
  

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
             <div className="button_container">

             <div className="searchbar">
                <p></p>
                <SearchBar onSearch={handleSearch} />
                <p>{errorMessage}</p> {/* Display the search term error message as needed */}
                
            </div>
                

                {/* Category radio buttons */}

                <div className="filter_buttons">
                    <h3>Sortby:</h3>

                <div className="button-container">
                    <input className="button"
                        type="radio" 
                        id="emailed" 
                        name="category" 
                        value="emailed" 
                        checked={category === 'emailed'} 
                        onChange={() => onCategoryChange('emailed')} 
                    />
                    <label htmlFor="emailed" className="button-label">Emailed</label>
                </div>

                <div className="button-container">
                    <input  className="button"
                        type="radio" 
                        id="shared" 
                        name="category" 
                        value="emailed" 
                        checked={category === 'shared'} 
                        onChange={() => onCategoryChange('shared')} 
                    />
                    <label htmlFor="shared" className="button-label">Shared</label>
                </div>

                <div className="button-container">
                    <input  className="button"
                        type="radio" 
                        id="viewed" 
                        name="category" 
                        value="viewed" 
                        checked={category === 'viewed'} 
                        onChange={() => onCategoryChange('viewed')} 
                    />
                    <label htmlFor="viewed" className="button-label">Viewed</label>
                </div>
                    
                </div>
                <div className="filter_buttons">
                <h3>Filter:</h3>    

                    <div className="button-container">
                        <input  className="button"
                            type="radio" 
                            id="day" 
                            name="timeInterval" 
                            value="1" 
                            checked={timeInterval === '1'} 
                            onChange={() => onTimeIntervalChange('1')} 
                        />
                         <label htmlFor="day" className="button-label">Day</label>

                    </div>

                    <div className="button-container">
                        <input  className="button"
                            type="radio" 
                            id="week" 
                            name="timeInterval" 
                            value="7" 
                            checked={timeInterval === '7'} 
                            onChange={() => onTimeIntervalChange('7')} 
                        />
                        <label htmlFor="week" className="button-label">Week</label>
                    </div>

                    <div className="button-container">
                        <input  className="button"
                            type="radio" 
                            id="month" 
                            name="timeInterval" 
                            value="30" 
                            checked={timeInterval === '30'} 
                            onChange={() => onTimeIntervalChange('30')} 
                        />
                        <label htmlFor="month" className="button-label">Month</label>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Sidebar;




