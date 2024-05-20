import Header from "../Header"
import '../App.css';
import DestinationsContent from "../DestinationsContent";
import data from '../data.json'

function DestinationsPage() {
  
  
  const {destinations} = data;
  
 
  
  

  return (
    <>
    <div className="destination-page">
    <Header/>
    <h1 className="dest-title"><span>01</span> Pick your destination</h1>
    <DestinationsContent   dest={destinations}/>
    </div>
    
    </>
  )
}

export default DestinationsPage