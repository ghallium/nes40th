import ArticlesData from "../data/articlesdata.json";



function News() {
    return (
        <div>
            {ArticlesData.map((article) => (
                <div className="article mobile:w-full md:w-11/12 rounded-md m-auto bg-darkdark bg-opacity-70 mb-4 flex flex-row-reverse justify-between py-5" key={article.id}>
                    <div className="article-info">
                        <div className="article-title mb-1"><h2 className="text-white font-extrabold md:text-2xl">{article.title}</h2></div>
                        <div className="article-subtitle w-11/12 mb-2"><p className="text-white text-sm font-bold md:text-xl">{article.subtitle}</p></div>
                        
                    </div>
                   <div className="article-image mr-2">
                        <img src={article.previewImage} className="w-52" />
                   </div> 
                </div>
            ))}
        </div>
    );
}

export default News;
