import React, { useState } from 'react'
import './Card.css'
import ItemCount from '../ItemCount/ItemCount'

export default function Card({ data }){
    const {title, price, stock} = data

    return(
        <div className="card-item">
            {console.log("console dentro de render")}
            <h2>{title}</h2>
            <p>Precio: $ {price}</p>
            <ItemCount stock={stock} initial={1}/>
        </div>

    )
}