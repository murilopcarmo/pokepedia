import React from "react";

class SearchPokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: "",
      image: "",
      type: "",
      error: "",
    };
  }
  pokemonSearch = async () => {
    const searchInput = this.state.input.toLowerCase();
    if (!searchInput) {
      return;
    }

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${searchInput}`
      );
      if (!response.ok) {
        throw new Error("Pokémon não encontrado!");
      }
      const data = await response.json();
      this.setState({
        output: data.name.toUpperCase(),
        image: data.sprites.front_default,
        type: data.types,
        stats: data.stats,
        cry: data.cries.latest,
        error: "",
      });
      // eslint-disable-next-line no-unused-vars
    } catch (e) {
      this.setState({
        output: "",
        image: "",
        type: "",
        stats: "",
        cry: "",
        error: "Não encontrado.",
      });
    }
  };
  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };
  playcry = () => {
    const pokecry = new Audio(this.state.cry);
    pokecry.currentTime = 0;
    pokecry.play();
  };
  render() {
    return (
      <div id="pokemon">
        <div id="text">Qual Pokémon busca?</div>
        <input
          id="search"
          type="text"
          placeholder="Ex: Squirtle"
          value={this.state.input}
          onChange={this.handleChange}
          required
        ></input>
        <div id="bottom-box">
          <button id="submit" onClick={this.pokemonSearch}>
            Buscar
          </button>
        </div>
        <br />
        <div id="output">
          {/*Container de dados*/}
          <div className="pokemon-info">
            {/*nome*/}
            <span>{this.state.output}</span>
            <br />
            {/*Sprite*/}
            <span>
              {this.state.image && <img src={this.state.image} alt="pokemon" />}
            </span>
            <br />
            {/*Tipos*/}
            {this.state.type &&
              this.state.type.map((item) => (
                <span className="type" id={item.type.name.toUpperCase()}>
                  {item.type.name.toUpperCase()}
                  <br />
                </span>
              ))}
            {/* Som do Pokemon */}
            {this.state.cry && (
              <div>
                <button id="audio" onClick={this.playcry} src={this.state.cry}>
                  ▶
                </button>
                Cry
              </div>
            )}
          </div>
          {/*Tabela de stats*/}
          {this.state.stats && this.state.stats.length > 1 && (
            <table id="statsTable">
              <thead>
                <tr>
                  <th>Stat</th>
                </tr>
              </thead>
              <tbody>
                {this.state.stats.map((item) => (
                  <tr>
                    <td>{item.stat.name.toUpperCase()}</td>
                    <td>{item.base_stat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <span>{this.state.error}</span>
        </div>
      </div>
    );
  }
}
export default SearchPokemon;
