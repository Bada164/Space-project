
import { useState } from 'react';




const DestinationsContent = ({dest}) => {
  const [currentDestination,setCurrentDestination] = useState(dest[0]);

  const [activeItem, setActiveItem] = useState(dest[0].id)

  const {name, images: {png} , description, distance, travel} = currentDestination;

  const handleClick = (itemID) => {
    setActiveItem(itemID);
    setCurrentDestination(dest[itemID]);
  };
  

  return (
    <>
   
    <div className='dest-content'>
      <div className='dest-pic'>
       <img src={png} alt="" />
      </div>
      <div className='dest-info'>
    <ul className='dest-menu'>
      {dest.map((item) => (
        <li key={item.id}   className={`${activeItem === item.id ? 'active' : ''}`}
        onClick={() => handleClick(item.id)}
        
        >{item.name}</li>
      ))}
    </ul>
    <h1>{name}</h1>
    <p>{description}</p>
    <div className='info-line'></div>
    <div className='travel-info'>
      <div className="box">
      <h3>avg distance:</h3>
      <h4>{distance}</h4>
      </div>
      <div className="box">
      <h3>est. travel time </h3>
      <h4>{travel}</h4>
      </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default DestinationsContent

