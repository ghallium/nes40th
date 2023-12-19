import React, {useState} from 'react';

function SearchBar({setResults}) {

  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then((json) => {
        console.log(json);
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        console.log(results);
        setResults(results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Gérer l'erreur ici, par exemple, afficher un message à l'utilisateur
      });
  };
  

  // const fetchData = (value) => {
  //   fetch("https://api.mobygames.com/v1/games?&platform=22&api_key=moby_aJkD7Y36skPGj6RyTQMWDevz068")
  //   .then((response) => response.json())
  //   .then((json) => {
  //     console.log(json);
  //     const results = json.filter((user) =>  {
  //       return value && 
  //       user && 
  //       user.name && 
  //       user.name.toLowerCase().includes(value)
  //     });
  //     console.log(results);
  //     setResults(results);
  //   });
  // }

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  }

  return (
    <div className='input-wrapper'>
        <input placeholder="Type to search..." value={input} onChange={(e) => handleChange(e.target.value)}/>
        <button>Search</button>
    </div>
  )
}

export default SearchBar;