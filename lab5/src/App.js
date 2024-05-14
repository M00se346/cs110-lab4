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
    const [timeInterval, setTimeInterval] = useState('day');
    const [category, setCategory] = useState('emailed');

    const handleTimeIntervalChange = (newTimeInterval) => {
        setTimeInterval(newTimeInterval);
    };

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
    };
  //END OF FILTER BUTTONS



  return (
    <div className="App">
      <header className="App-header">
        <Title title={title} setTitle={setTitle}/>
        <button onClick={()=>setTitle("new text")}>Click me</button>
      </header>

      <div className = "mainContent">
        <div className = "left_box">
        <div className ="inner_left_box">
          <Sidebar 
                timeInterval={timeInterval} 
                category={category} 
                onTimeIntervalChange={handleTimeIntervalChange} 
                onCategoryChange={handleCategoryChange} 
            />
          </div>
        </div>

        <div className = "right_box">

        <div>

          <div className = "all_article_content">
            <Article term1={term1} term2={term2} index1={0} index2={3} /> {/* change the index depending  */}
            <Article term1={term1} term2={term2} index1={3} index2={6} /> 
          </div>

        </div>
        </div>
      </div>

    </div>
  );
}

export default App;

//in function, have return startement. 
//inside return statement is the HTML