//rafce enter makes shortcut for component boilerplate
import './Article.css';
import React, {useState, useEffect} from 'react'

// const Article = ({num, title, description, time, image}) => {
//   return (
//     <div>
//       <h1>{num}</h1>
//       <h1>{title}</h1>
//       <p>{description}</p>
//       <p>{time}</p>
//       <img>{image}</img>
    
//     {/* copied over from main.html */}
//         <div class = "article_result"> 
//             <div class = "top"> 
//                 <div class = "inner_top"> {num} </div>
//                 <div class = "inner_top"> {title} </div>
//                 <div class = "inner_top_date">{time}</div>
//             </div>
//             <div class = "post-content"> 
//                 <img src="" alt="image goes here">{image}</img>
//                 {description}
//             </div>
//         </div>

//     </div>




//   )
// }

// export default Article


// youtube video example====================================================
const Article = () => {
    const [articles, setArticles] = useState([]);
    const [term, setTerm] = useState('everything');
    //set loading image when loading
    const [isLoading, setIsLoading] = useState(true);

    useEffect( ()=>{
    const fetchArticles = async() => {
        // try{
        // //want link with ${} to fill in the missing spots of link that we want to add
        // const res = await fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=hd2doA0T1atpRi9Vs6foDnEjnrNRDREo')
        // const articles = await res.json()
        // console.log(articles.response);
        // setArticles(articles.response)
        // } catch (error){
        // console.error(error);
        // }
        try {
            const emailDay = await fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=hd2doA0T1atpRi9Vs6foDnEjnrNRDREo');
            const emailWeek = await fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=hd2doA0T1atpRi9Vs6foDnEjnrNRDREo');
            const emailMonth = await fetch('https://api.nytimes.com/svc/mostpopular/v2/emailed/30.json?api-key=hd2doA0T1atpRi9Vs6foDnEjnrNRDREo');
            const data = await emailWeek.json();
            console.log(data.results);
            setArticles(data.results);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }
    
    fetchArticles()
    }, [])

    return(
        <section>
            <div className="right_box">
              {isLoading ? (
                <p>Loading...</p>
            ) : (
                articles.length > 0 ? (
                    articles.map((article) => {
                        
                        const { title, published_date, _id, media, abstract } = article;
                        const imageUrl = media?.[0]?.['media-metadata']?.[0]?.url || '';

                        return (
                            <div className="article_box" key={_id}>
                            <article key={_id}>
                                <h2>{_id}</h2>
                                <div className="top">
                                    <h2 className="inner_top">{title}</h2>
                                    <p className="inner_top_date">{published_date}</p>
                                </div>
                                <div className="bottom">
                                    <img src={imageUrl} alt={title} />
                                    <p>{abstract}</p>
                                </div>
                            </article>
                            </div>
                        );
                    })
                ) : (
                    <p>No articles found.</p>
                )
            )}
            </div>
        </section>
    )

}

export default Article;
