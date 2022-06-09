import "./style.css"

import React, { useEffect, useState } from 'react'

import Map from '../Map'
import Sidebar from '../Sidebar'
import api from '../../api'

export default function Main() {
  const [campus, setCampus] = useState()

  useEffect(() => {
    // lembra que eu disse que se eu colocar um useEffect com o array de dependencias vazio ele só vai entneder que é pra rodar no começo quando componente for renderizar? show, pois bora fazer um teste buscando dados da api, aqui eu vou buscar dados dos cursos, show dms
    api.get('/cota')
  }, [])

  return (
    <main>
      <Map campus={campus} setCampus={setCampus} />
      <Sidebar campus={campus} setCampus={setCampus} />
    </main>
  )
}