import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail ({data}){
    const {id, image, title, detail, price, stock} = data

    return(
        <div className="detail-container">
            <div className="detail-image">
            <img src={`../${image}`} alt={image} />
            </div>
            <div className="item-detail">
                <h2>{title}</h2>
                <p>Descripcion: {detail}</p>
                <p>Precio: $ {price}</p>
                <ItemCount stock={stock} initial={1}/>

            </div>
        </div>
    )
}