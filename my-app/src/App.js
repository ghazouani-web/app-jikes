import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  const [like, setlike] = useState(0);
  const [dislike, setdislike] = useState(0);

  const [likeactive, setlikeactive] = useState(false);
  const [dislikeactive, setdislikeactive] = useState(false);

  const likef = () => {
    if (likeactive) {
      setlikeactive(false);
      setlike(like);
    } else {
      setlikeactive(true);
      setlike(like + 1);
    }
  };

  const dislikef = () => {
    if (dislikeactive) {
      setdislikeactive(false);
      setdislike(dislike);
    } else {
      setdislikeactive(true);
      setdislike(dislike + 1);
    }
  };

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/search?query=all")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setJokes(res.result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Chuck Norris Jokes</h1>
      {jokes.map((joke) => (
        <div class="brd">
          {joke.categories.length > 0 ? (
            joke.categories.map((cat) => (
              <section class="categorie">{cat}</section>
            ))
          ) : (
            <section class="Uncategorized"> Uncategorized </section>
          )}

          {joke.value}

          <button onClick={likef}>like {like}</button>
          <button onClick={dislikef}>unlike {dislike}</button>
        </div>
      ))}
    </div>
  );
}

export default App;
