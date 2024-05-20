import Header from "../Header"
import TechnologyContent from "../TechnologyContent"
import data from '../data.json'

const TechnologyPage = () => {

  const {technology} = data;

  console.log(technology);
  return (
    <>
    <div className="tech-page">
    <Header/>
    <h1 className="tech-title"><span>03</span> Space Launch 101</h1>
    <TechnologyContent   tech={technology} />
    </div>
    </>
  )
}

export default TechnologyPage