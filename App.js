import { useEffect, useState } from 'react';
import './App.css';
import Article from './lab5/src/components/Article';
import Title from './lab5/src/components/Title';
import Sidebar from './lab5/src/components/Sidebar';

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