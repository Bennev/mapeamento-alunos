import "./style.css"

import React, { useEffect, useState } from 'react'

import Map from '../Map'
import Sidebar from '../Sidebar'
import api from '../../api'

export default function Main() {
  const [campusList, setCampusList] = useState([])
  const [campus, setCampus] = useState()

  useEffect(() => {
    api.get("/campus").then(res =>
      setCampusList(res.data)
    ) // se bem que, vamos fazer algo diferente aqui, nao agora pq eu vou almocar, mas 13h quando eu voltar vamos criar uma tabela pro campus, ele vai deixar de se rum enum pois ow, vou sair aqui, volto mais tarde, 13h viu?
  }, [])

  return (
    <main>
      <Map campus={campus} setCampus={setCampus} campusList={campusList} />
      <Sidebar campus={campus} setCampus={setCampus} campusList={campusList} />
    </main>
  )
}