import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/ListItem.css"

const ListItem = ({img,name,id,comible}) => {
  return (
    <div className="comidaListItem-container">
        <img src={img} alt={name} title={name} className="comidaListItem-img" loading="lazy"/>
        <h2 className="comidaListItem-name">{name}</h2>
        {comible==="Beneficioso" && <p className='comidaListItem-beneficioso'>{comible}</p>}
        {comible==="No recomendado" && <p className='comidaListItem-norecomendable'>{comible}</p> }
        {comible==="Tóxico" && <p className='comidaListItem-toxico'>{comible}</p> }
      <Link className="home-a" to={`comida/${id}`}>
        <button className='comidaListItem-button'>Saber más</button>
      </Link>
    </div>
  )
}

export default ListItem