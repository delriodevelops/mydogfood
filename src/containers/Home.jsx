import React, { useState } from 'react'
import { comidaList } from '../comidaList'
import ListItem from '../components/ListItem'
import "./styles/Home.css"


const Home = () => {
  const [search,setSearch]= useState('');
  const handleSearch = e => setSearch(e.target.value);
  
  const [filter,setFilter]=useState({
    beneficioso:true,
    noRecomendado:true,
    toxico:true,
  })
  
  const filteredComida = comidaList.filter(
    comida=>(
      (!!filter.beneficioso && (comida.comible.includes("Beneficioso") && comida.name.toLowerCase().includes(search.toLowerCase())))||
      (!!filter.noRecomendado && (comida.comible.includes("No recomendado") && comida.name.toLowerCase().includes(search.toLowerCase())))||
      (!!filter.toxico && (comida.comible.includes("Tóxico") && comida.name.toLowerCase().includes(search.toLowerCase())))
    )
  )

  const handleBeneficioso = ()=>{!!filter.beneficioso ? setFilter({...filter,beneficioso:false}):setFilter({...filter,beneficioso:true})}
  const handleNoRecomendable = ()=>{!!filter.noRecomendado ? setFilter({...filter,noRecomendado:false}):setFilter({...filter,noRecomendado:true})}
  const handleToxico = ()=>{!!filter.toxico ? setFilter({...filter,toxico:false}):setFilter({...filter,toxico:true})}




  return (
    <>
      <input id="home-input" maxLength="20" type="text" className="home-input" value={search} placeholder='Espinacas' onChange={handleSearch}></input>
      <div className="home-filters">
        <input type="checkbox" defaultChecked onClick={handleBeneficioso} className="beneficioso-input" /><span>Beneficioso</span>
        <input type="checkbox" defaultChecked onClick={handleNoRecomendable} className="no-recomendable-input" /><span>No recomendable</span>
        <input type="checkbox" defaultChecked onClick={handleToxico} className="toxico-input" /><span>Tóxico</span>
      </div>
        {filteredComida.length===0 && <h2 className='home-notfound'>No se encontraron resultados</h2>}
      <div className="comidaList-container">
        {filteredComida.map(comida=>(
          <ListItem comible={comida.comible} key={comida.id} img={comida.img} name={comida.name} id={comida.id}/>
        ))}
      </div>
    </>
  )
}

export default Home