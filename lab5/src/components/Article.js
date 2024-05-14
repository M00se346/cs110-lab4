//rafce enter makes shortcut for component boilerplate
import './Article.css';
import React, {useState, useEffect} from 'react'

// article function accepts the t1 (sort by) and t2 (time frame) and t3 (search val) ?
const Article = ({term1, term2, index1, index2}) => {
    const [articles, setArticles] = useState([]); // store the resulting articles
   
    //set loading image when loading
    const [isLoading, setIsLoading] = useState(true);

    // if there's an error loading the articles
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
        <div className="article_container">


            {isLoading ? (  // check if articles are properly rendering
            <p>Loading...</p>
        ) :( articles && articles.length > 0 ? (

            //get the val entered and then decide the ranges. 
            
            
            // get the range for column 1
            articles.slice(index1, index2).map((article) => {  // if there are articles that match the query
            
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