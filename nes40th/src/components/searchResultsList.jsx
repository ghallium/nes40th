import React from 'react';

function SearchResultsList({results}) {
    return <div className="results-list w-full flex flex-col shadow-sm rounded-sm mt-2 max-w-xs overflow-y-scroll">
            {
                results.map((result, id) => {
                    return <div key={id}>{result.name}</div>
                })
            }
        </div>
    
};

export default SearchResultsList;