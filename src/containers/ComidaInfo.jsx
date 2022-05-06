import React from 'react'
import "./styles/ComidaInfo.css"

const ComidaInfo = ({name,comible,info,id,img}) => {

const newPageTitle = `${name} - MyDogFood`;
document.querySelector('title').textContent = newPageTitle;

  return (
    <div className="comidaInfo-container">
        <img src={img} alt={name} title={name} className="comidaInfo-img" />
        <h2 className="comidaInfo-name">{name}
            <br/>
            {comible==="Beneficioso" && <span className='comidaInfo-beneficioso'><small>{comible}</small></span>}
            {comible==="No recomendado" && <span className='comidaInfo-norecomendable'><small>{comible}</small></span> }
            {comible==="Tóxico" && <span className='comidaInfo-toxico'><small>{comible}</small></span> }
        </h2>
        <p className="comidaInfo-info">{info}</p>
    </div>
  )
}

export default ComidaInfo