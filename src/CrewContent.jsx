import { useState } from "react";

const CrewContent = ({crew}) => {
  

  const [currentCrew,setCurrentCrew] = useState(crew[0]);
  
  const [activeItem, setActiveItem] = useState(crew[0].id);

  const {bio, name, images: {png} , role} = currentCrew;

 

  const handleClick = (itemID) => {
    setCurrentCrew(crew[itemID]);
    setActiveItem(itemID);
    
  };
  

  return (
    <>
    <div className='crew-content'>
     
    <div className='crew-info'>
        <h2>{role}</h2>
        <h1>{name}</h1>
      <p>{bio}</p>
    <ul className="crew-info-switch">
      {crew.map((item) => (
        <li key={item.id} onClick={() => {handleClick(item.id)}}
         className={`${activeItem === item.id ? 'crewActive' : ''}`}></li>
      ))}
    </ul>
    </div>
    <div className="crew-pic">
       <img src={png} alt="" />
    </div>
    </div>
    </>
  )
}

export default CrewContent