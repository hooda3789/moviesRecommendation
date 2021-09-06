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

var genre = Object.keys(mymovies);
function App() {
  var [selectGenre, setGenre] = useState("");

  function genreClickHandler(genre) {
    // var myGenre = mymovies[genre];
    // var myvalues = Object.keys(myGenre);
    // selectGenre = {}
    // for(let i=0; i<myvalues.length; i++){
    //   console.log(myGenre[i]);
    //   selectGenre[];
    // }

    // console.log("selectGernre", selectGenre)
    // setGenre(selectGenre);
    setGenre(genre);
  }


  return (
    <div className="App">
      <h1>🎥 Movies Recommendation</h1>
      <h4>Select a genre to get started</h4>
      {genre.map(function(item){
          return(
            <button id="genrebtn" onClick = {()=>genreClickHandler(item)}>{item}</button>
          )
      })}
      <hr />
      <div>
        {
          mymovies[selectGenre].map((movie) =>{
            return (<ul>
              <li>
                <h4>{movie.name}</h4>
                <h4>{movie.ratings}</h4>
              </li>
            </ul>
             ) }
          )}
      </div>
      
    </div>
  );
}

export default App;
