import React, {useState,Component} from "react";
import {DEFAULT_TYPE,DEFFAULT_URL,POKEMON_LIST} from "../constants.js";
import Stats from "./stats";
import Info from "./info";
import Button from "./buttons";
import Loader from "./loader";
import "./pokemon.css";




class Pokemon extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
      pokemonName:POKEMON_LIST[0],
      pokemonData:null,
    };
    this.getPokemon= this.getPokemon.bind(this);
    this.fetchPokemonData=this.fetchPokemonData.bind(this);
  }

  getPokemon(){
    const randomNumber=Math.floor(Math.random()*POKEMON_LIST.length);
    this.setState({pokemonName:POKEMON_LIST[randomNumber]});
    this.fetchPokemonData();
  }
  fetchPokemonData() {
    this.setState({
      isLoading:true
    })
    fetch(DEFFAULT_URL + DEFAULT_TYPE + this.state.pokemonName)
        .then(res => res.json())
        .then(res =>{
          this.setState({
            isLoading:false,
            pokemonData:res
          })
        })
  }

  componentDidMount(){
    this.fetchPokemonData();
  }

  render(){
    const {isLoading,pokemonData}=this.state;


    return (<div className="pokemon">
      {isLoading
      ? <Loader />
      : <section >
      <h2>{pokemonData.name.toUpperCase()}</h2>
      <Info sprites={pokemonData.sprites} id={pokemonData.id} experience={pokemonData.base_experience}/>
      <Stats stats={pokemonData.stats} />
      <Button type="" text="Generate" action={this.getPokemon}/>
    </section>
    }
    </div>)
  }
}


export default Pokemon;