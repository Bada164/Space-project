import Header from "../Header"
import data from '../data.json'
import CrewContent from "../CrewContent"

const CrewPage = () => {
  const {crew} = data;


  return (
    <>
    
    <div className="crew-page">
    <Header/>
    <h1 className="crew-title"><span>02</span> Meet Your Crew</h1>
    <CrewContent crew={crew}/>
    </div>

    </>
  )
}

export default CrewPage