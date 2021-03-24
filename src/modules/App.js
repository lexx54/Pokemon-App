import React from "react";
import Pokemon from "./pokemon/"
import "./app.css";

const DEFFAULT_URL = "https://pokeapi.co/api/v2/";
const DEFAULT_TYPE ="pokemon/";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: {}
    };

  }

  componentDidMount() {
    setTimeout(() => {
      fetch(DEFFAULT_URL + DEFAULT_TYPE + "charizard")
        .then(res => res.json())
        .then(res => this.setState({
          isLoading: false,
          data: res
        }))
    }, 2000)
  }

  render() {
    const { isLoading, data } = this.state;
    console.log(data);
    if (isLoading) {
      return <h1>Loading...</h1>
    }
    return (
        <Pokemon data={data} />
    )
  }
}

export default App;
