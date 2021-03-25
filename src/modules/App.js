import React from "react";
import Pokemon from "./pokemon/"
import "./app.css";

const DEFFAULT_URL = "https://pokeapi.co/api/v2/";
const DEFAULT_TYPE ="pokemon/";
const POKEMON_LIST=[
  "charizard",
  'ditto',
  'charmeleon',
  'alakazam'
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      pokemonName:"charizard",
      pokemonData: {}
    };
    this.getPokemon=this.getPokemon.bind(this);
    this.fetchPokemonData=this.fetchPokemonData.bind(this);
  }

  getPokemon(){
    console.log("getting pokemon");
    const randomNumber=Math.floor(Math.random()*POKEMON_LIST.length);
    this.setState({pokemonName:POKEMON_LIST[randomNumber]})
    this.fetchPokemonData();
  }

  fetchPokemonData(){
    setTimeout(() => {
      fetch(DEFFAULT_URL + DEFAULT_TYPE + this.state.pokemonName)
        .then(res => res.json())
        .then(res => this.setState({
          isLoading: false,
          pokemonData: res
        }))
    }, 2000)
  }

  componentDidMount() {
    this.fetchPokemonData();
  }

  render() {
    const { isLoading, pokemonData } = this.state;
    console.log(pokemonData);
    if (isLoading) {
      return <h1>Loading...</h1>
    }
    return (
      <div className="principal-page">
        <Pokemon pokemonData={pokemonData} action={this.getPokemon}/>
        <Pokemon pokemonData={pokemonData} action={this.getPokemon}/>
      </div>
    )
  }
}

export default App;
