import React, {useEffect, useState} from 'react'
import "./style.css"
import Map from '../Map'
import Sidebar from '../Sidebar'

export default function Main() {
    const [campus, setCampus] = useState()

    return (
        <main>
            <Map  campus={campus} setCampus={setCampus} />
            <Sidebar campus={campus} setCampus={setCampus} />
        </main>
    )
}