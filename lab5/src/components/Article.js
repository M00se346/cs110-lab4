
//rafce enter makes shortcut for component boilerplate
import './Article.css';
import React, {useState, useEffect} from 'react'

// youtube video example====================================================
const Article = ({term1, term2}) => {
    const [articles, setArticles] = useState([]);
    const [term, setTerm] = useState('1');
    const [isLoading, setIsLoading] = useState(true);

    useEffect( ()=>{

        const fetchArticles = async() => {
            
            try {
                const res = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/${term2}/${term1}.json?api-key=hd2doA0T1atpRi9Vs6foDnEjnrNRDREo`);
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
              {isLoading ? (
                <p>Loading...</p>
            ) : (
                articles && articles.length > 0 ? (
                    articles.map((article) => { 
                        
                        const { title, published_date, _id, media, abstract } = article;
                        const imageUrl = media?.[0]?.['media-metadata']?.[0]?.url || '';

                        return (
                            <div className="article_box" key={_id}>
                            <article key={_id}>
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