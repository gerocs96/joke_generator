import React, {useState, useEffect} from 'react';

const API_URL = 'http://api.icndb.com/jokes/random';

function App() {
  const [joke, setJoke]= useState('');

  const generateJoke = () =>{
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setJoke(data.value.joke));
  }

  useEffect(() => {
    generateJoke()
  }, [])
  return(
    <div className="box">
      <h1><span role="img" aria-label="emoji">😂</span> Chuck Norris Jokes <span role="img" aria-label="emoji">😂</span></h1>
      <p dangerouslySetInnerHTML={{__html: joke}}/>
      <button onClick={generateJoke}><span>Generate!</span></button>
    </div>
  );
}

export default App;
