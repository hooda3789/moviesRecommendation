import logo from './logo.svg';
import './App.css';
import react, {useState} from 'react';
var mymovies = {
  Action : [{
    name : "Avengers",
    ratings : 4.5
  },
  {
    name : "Mission Impossible",
    ratings : 4
  },
  {
    name : "John Wick",
    ratings : 3.5
  }
],

Sci : [{
  name : "Ready Player One",
  ratings : 5
},
{
  name : "Star Wars",
  ratings : 5
}
],
Horror : [{
  name : "Conjuring",
  ratings : 3.5
},
{
  name : "Grudge",
  ratings : 4
}
]
}


function App() {
  const [selectGenre, setGenre] = useState("");

  function genreClickHandler(genre) {
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>🎥 Movies Recommendation</h1>
      <h4>Select a genre to get started</h4>
      
    </div>
  );
}

export default App;
