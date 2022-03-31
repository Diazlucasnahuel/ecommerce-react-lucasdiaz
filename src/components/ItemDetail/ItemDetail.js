import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
export default function ItemDetail ({data}){
    const {id, image, title, detail, price, stock} = data

    return(
        <div className="detail-container">
            <div className="detail">
                <img src={`../${image}`} alt={image} />
            
                <div className="item-detail">
                    <h2>{title}</h2>
                    <p>Descripcion: {detail}</p>
                    <h3>Precio: $ {price}</h3>

                    <div className="item-count">
                        <ItemCount stock={stock} initial={1}/>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}