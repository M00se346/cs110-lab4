import './App.css';

import React, {useState, useEffect} from 'react';

// import { useState } from 'react';
// import { useEffect } from 'react';

import Title from './components/Title'
import Sidebar from './components/Sidebar'
import Article from './components/Article'


function App() {
  
  //const NYT_link = "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=hd2doA0T1atpRi9Vs6foDnEjnrNRDREo"


  
  const getArticles = async () => {

    try {

      const response = await fetch('NYT_link');

      const data = await response.json();

      console.log(data); 
      // you can view if a response went through in developer mode. 

      setArticles(data.results); 
      // it should at most display 15 articles 

    } catch (error) {

      console.error('Error fetching articles:', error);

    }

  };

  const articlesStatic = [{
    num: "1)",
    title: "title1",
    description:"desc1",
    time:"time1",
    image: "image1"
  },
  {
    num: "2)",
    title: "title2",
    description:"desc2",
    time:"time2",
    image: "image2"
  },
  {
    num: "3)",
    title: "title3",
    description:"desc3",
    time:"time3",
    image: "image3"
  },
  {
    num: "4)",
    title: "title4",
    description:"desc4",
    time:"time4",
    image: "image4"
  }]


  const [title, setTitle] = useState("initial title")
  const [article, setArticles] = useState([])


  // const fetchArticlesData = () => {
  //   //make try catch api call and get data - given in lab
  //   //then setArticles to this data
  //   //setarticles
  // }

  // const [term1, setTerm1] = useState('emailed'); // Initial term
  // const [term2, setTerm2] = useState('1'); // Initial term


  // // Function to update term
  // const handleTermChange = (newTerm1, newTerm2) => {
  //     setTerm1(newTerm1);
  //     setTerm2(newTerm2);
  // };
  

  //FOR FILTER BUTTONS ONLY
    const [timeInterval, setTimeInterval] = useState('1');
    const [category, setCategory] = useState('emailed');

    const handleTimeIntervalChange = (newTimeInterval) => {
        setTimeInterval(newTimeInterval);
    };

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };
  //END OF FILTER BUTTONS

  const [searchTerm, setSearchTerm] = useState(15);
  const [page, setPage] = useState(1); {/* the current page that the user is on */}
  const [possiblePages, setPossiblePages] = useState (3);

  // column 1
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(3);

  // column 2
  const [index3, setIndex3] = useState(3);
  const [index4, setIndex4] = useState(6);

  useEffect(() => {
    // Function to calculate index based on page and searchTerm
    const findInd = () => {
        if (page === 1) {
            setIndex1(0);
            if (searchTerm < 3) {
                setIndex2(searchTerm);
                setIndex3(0);
                setIndex4(0);
            } else {
                setIndex2(3);
                setIndex3(3);
                if (searchTerm < 6) {
                    setIndex4(searchTerm);
                } else setIndex4(6);
            }
        }

        if (page === 2) {
            setIndex1(6);
            if (searchTerm < 9) {
                setIndex2(searchTerm);
                setIndex3(0);
                setIndex4(0);
            } else {
                setIndex2(9);
                setIndex3(9);
                if (searchTerm < 12) {
                    setIndex4(searchTerm);
                } else setIndex4(12);
            }
        }

        if (page === 3) {
            if (searchTerm >= 12) {
                setIndex3(0);
                setIndex4(0);
                setIndex1(12);
                if (searchTerm < 15) {
                    setIndex2(searchTerm);
                } else {
                    setIndex2(15);
                }
            }
        }
    };

    // Call findInd whenever page or searchTerm changes
    findInd();
}, [page, searchTerm]);

const displayPageButtons = () => {
  const buttons = [];
  for (let i = 1; i <= possiblePages; i++) {
      buttons.push(
          <button key={i} className="pButton" onClick={() => setPage(i)}>
              {i}
          </button>
      );
  }
  return buttons;
};

  return (
    <div className="App">
      <header className="appHeader">
        <Title term1={timeInterval} term2={category} />
      </header>

      <div className = "mainContent">
        <div className = "left_box">
          
        <div className ="inner_left_box">
          <Sidebar 
                timeInterval={timeInterval} 
                category={category} 
                onTimeIntervalChange={handleTimeIntervalChange} 
                onCategoryChange={handleCategoryChange} 
                setPossiblePages={setPossiblePages}
                setSearchTerm={setSearchTerm}
                setPage = {setPage}
            />
          </div>
        </div>

        <div className = "right_box">

        <div>

          <div className = "all_article_content">
            <Article term1={timeInterval} term2={category} index1={index1} index2={index2} /> {/* change the index depending  */}
            <Article term1={timeInterval} term2={category} index1={index3} index2={index4} /> 
          </div>

        </div>
        </div>
      </div>

      <div className = "page-buttons">
        {displayPageButtons()}
      </div>

    </div>
  );
}

export default App;

//in function, have return startement. 
//inside return statement is the HTML