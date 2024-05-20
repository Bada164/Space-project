import { useState } from "react"

const TechnologyContent = ({tech}) => {

  const [currentTech,setCurrentTech] = useState(tech[0]);

  const [activeItem, setActiveItem] = useState(tech[0].id)
  
  const {description, images: {portrait}, name} = currentTech;

  const handleClick = (ID) => {
    setActiveItem(ID);
    setCurrentTech(tech[ID])
  }

  return (
    <>
    <div className='tech-content'>
    <div className='tech-info'>
      <ul className="tech-switch">
        {tech.map((item) => (
          <li  className={`${activeItem === item.id ? 'li-active' : ''}`} key={item.id}
          onClick={() => {
            handleClick(item.id)
          }}  
          >{item.num}</li>
        ))}
      </ul>
      <div className="tech-info-content">
        <h2>The Terminology...</h2>
        <h1>{name}</h1>
        <p>{description}</p>
      </div>
    </div>
    <div className="tech-pic">
      <img src={portrait} alt="" />
    </div>
    </div>
    </>
  )
}

export default TechnologyContent