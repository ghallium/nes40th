import { useState } from "react";

import SearchBar from "../../components/searchBar";
import SearchResultsList from "../../components/searchResultsList";
import CollectionImg from "../../assets/collection.webp";

function Collection() {

    const [results, setResults] = useState([]);

    return (
        <div>
            <h1>Manage your collection</h1>
            <div className="search-bar-container">
                <SearchBar setResults={setResults}/>
                <SearchResultsList results={results}/>
            </div>
            <div>
                <img src={CollectionImg} alt="NES boxed games"/>
            </div>
        </div>
        
    )
}

export default Collection;