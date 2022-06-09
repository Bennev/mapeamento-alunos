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
    )
  }, [])

  return (
    <main>
      <Map campus={campus} setCampus={setCampus} campusList={campusList} />
      <Sidebar campus={campus} setCampus={setCampus} campusList={campusList} />
    </main>
  )
}