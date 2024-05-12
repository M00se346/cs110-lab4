import { useEffect, useState } from 'react';
import './App.css';
import Article from './components/Article';
import Title from './components/Title';
import Sidebar from './components/Sidebar';

function App(){
    const [title, setTitle] = useState["asdfghjkl"]

    const [articlesData, setArticlesData] = useState([
        {title: "art1"},
        {title: "art2"},
        {title: "art3"}
    ])

    useEffect(()=>{
        //do something
    }, [title])
}