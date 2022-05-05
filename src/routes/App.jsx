import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import NotFound from '../containers/NotFound'
import Home from '../containers/Home'
import ComidaInfo from "../containers/ComidaInfo"
import { comidaList } from '../comidaList'

const App = () => {
  return (
    <Router>
        <Layout>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='*' element={<NotFound />}></Route>
                <Route path="comida">
                  {comidaList.map(comida=>(
                    <Route key={comida.id} path={comida.id} element={<ComidaInfo name={comida.name} img={comida.img} comible={comida.comible} info={comida.info} id={comida.id} />}/>
                  ))}
                </Route>
            </Routes>
        </Layout>
    </Router>
  )
}

export default App