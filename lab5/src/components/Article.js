//rafce enter makes shortcut for component boilerplate
import './Article.css';
import React, {useState, useEffect} from 'react'

// youtube video example====================================================
const Article = ({term1, term2}) => {
    const [articles, setArticles] = useState([]);
   // const [term, setTerm] = useState('everything');
    //set loading image when loading
    const [isLoading, setIsLoading] = useState(true);

    useEffect( ()=>{
    const fetchArticles = async() => {
        
        try {
            const res = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/${term1}/${term2}.json?api-key=hd2doA0T1atpRi9Vs6foDnEjnrNRDREo`);
            const data = await res.json();
            console.log(data.results);
            setArticles(data.results);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

        fetchArticles();
    }, [term1, term2]); // Fetch articles whenever term changes


    return(
        <section>
            <div className = "all_article_content">
            <div className="article_container">
              {isLoading ? (
                <p>Loading...</p>
            ) : (
                articles && articles.length > 0 ? (
                    articles.map((article) => { //make this 6 items
                        
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

            <div className="article_container">
              {isLoading ? (
                <p>Loading...</p>
            ) : (
                articles && articles.length > 0 ? (
                    articles.map((article) => { //make this 6 items
                        
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
            </div>
        </section>
    )

}

export default Article;




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