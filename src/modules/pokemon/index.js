import Stats from "./stats";
import Info from "./info"
const Pokemon = ({ data }) => (
  <section className="data">
    <h2>{data.name.toUpperCase()}</h2>
    <Info sprites={data.sprites} id={data.id} experience={data.base_experience}/>
    <Stats stats={data.stats} />
  </section>
)

export default Pokemon;