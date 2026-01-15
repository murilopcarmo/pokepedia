import React from "react";
import ReactDOM from "react-dom/client";
import SearchPokemon from "./searchPoke.jsx";

class App extends React.Component {
  
  render() {
    return (
      <div id="app-container">
        {/*<Header />*/}
        <header>
        <img
          id="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="pokemon-logo"
        />
        </header>
        <main>
          <SearchPokemon />
        </main>
        {/*<Footer />*/}
        <footer>© 2026 Pokémon Search API</footer>
      </div>
    );
  }
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
