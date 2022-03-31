import React, { useState } from 'react'
import './ItemList.css'
import ItemCount from '../ItemCount/ItemCount'
import ButtonDetail from '../ButtonDetail/ButtonDetail'

export default function Card({ data }){
    const {image, title, price, stock} = data

    return(
        <div className="card-item">
            {console.log("console dentro de render")}

            <div className='container-card-data'>
                <img src={`./${image}`} alt={image} />
                <h2>{title}</h2>
                <p>Precio: $ {price}</p>
                <ItemCount stock={stock} initial={1}/>
                <ButtonDetail/>
            </div>
                
            
        </div>

    )
}