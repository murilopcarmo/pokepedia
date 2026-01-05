import React from "react";
import ReactDOM from "react-dom/client";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      output: '',
      image: '',
      type: '',
      error: ''
    };
  }
  pokemonSearch = async ()=>{
    const searchInput = this.state.input.toLowerCase();
    if(!searchInput){return;}
    
    try{
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchInput}`);
      if(!response.ok){
        throw new Error("Pokémon não encontrado!");
      }
      const data= await response.json();
      this.setState({
        output: data.name.toUpperCase(),
        image: data.sprites.front_default,
        type: data.types,
        error: ''
      });
    // eslint-disable-next-line no-unused-vars
    } catch(error){
      this.setState({
        output: '',
        image: '',
        type: '',
        error: 'Não encontrado.'
      });
    }
  }
  handleChange = (event) => {
    this.setState({ input: event.target.value });
  }
  render() {
    return (
      <div id="pokemon">
        <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="pokemon-logo"/>
        <div id="text">Qual Pokémon busca?</div>
        <input id="search" type="text" placeholder="Ex: Squirtle" value={this.state.input} onChange={this.handleChange} required></input>
        <div id="bottom-box">
          <button id="submit" onClick={this.pokemonSearch}>Buscar</button>
        </div><br />
        <div id="output">
          {this.state.type && this.state.type.map((item) => (
            <span className="type" id={item.type.name.toUpperCase()}>{item.type.name.toUpperCase()}<br /></span>
          ))}
          {this.state.image && <img id="image"src={this.state.image} alt="pokemon"/>}
          <span>{this.state.error}</span>
        </div>
      </div>
)
  }
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
