import React,{useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import mockProductos from '../MockProducts/MockProducts'


function ItemDetailContainer(){

    const [items, setItem] = useState([]);

    const getItem = () => {
        return new Promise ((resolve, reject) => {
            return resolve(mockProductos)
        })
    }

    useEffect(() => {
        getItem().then((y) => {
            setItem(y)
        })
    }, [])

    return(
        <>
        <h2>Detalle</h2>
        <div>
        {items.map( (item) => {
                const {id} = item

                return(
                    <ItemDetail data={item} key={id}/>
                )
            })}
        </div>
        </>
    )
    
}

export default ItemDetailContainer