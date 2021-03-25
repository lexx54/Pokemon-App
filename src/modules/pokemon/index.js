import Stats from "./stats";
import Info from "./info";
import Button from "./buttons"
import "./pokemon.css";

const Pokemon = ({ data }) => (
  <section className="pokemon">
    <h2>{data.name.toUpperCase()}</h2>
    <Info sprites={data.sprites} id={data.id} experience={data.base_experience}/>
    <Stats stats={data.stats} />
    <Button type="" text="Generate"/>
  </section>
)

export default Pokemon;