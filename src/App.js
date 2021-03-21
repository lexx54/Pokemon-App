import React from "react";

const DEFFAULT_URL="https://pokeapi.co/api/v2/pokemon/ditto"

const Info = ({data})=>{

  return (
    <article>
      <h1>{data.name}</h1>
      <p>{data.id}</p>
      <p>{data.height}kg</p>
      {


        data.stats.map(i =>{
          const {base_stat,stat}=i;
          return (
          <article>
            <h2>stats</h2>
            <p>{stat.name}</p>
            <p>{base_stat}</p>
          </article>)
        })
      }
    </article>
  )
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
      data:{}
    };

  }

  componentDidMount(){
    setTimeout(()=>{
      fetch(DEFFAULT_URL)
        .then(res => res.json())
        .then(res => this.setState({
          isLoading:false,
          data:res
        }))
    },2000)
  }

  render(){
    const {isLoading,data}=this.state;
    if (isLoading){
      return <h1>Loading...</h1>
    }
    return <Info data={data} />
  }
}

export default App;
