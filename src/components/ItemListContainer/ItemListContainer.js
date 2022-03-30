import React,{useState, useEffect} from 'react'
import './ItemListContainer.css'
import Card from '../ItemList/ItemList'
import mockProductos from '../MockProducts/MockProducts'

const ItemListContainer = ({children}) => {
    
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return new Promise ((resolve, reject) => {
            return resolve(mockProductos)
        })
    }

    useEffect ( () => {
        getProducts().then( (productos) => {
            setProducts(productos)
        })
    }, [])

    return(
        <>
        <h2>{children}</h2>
        <div className="container-cards">
            {products.map( (product) => {
                const {id} = product

                return(
                    <Card data={product} key={id}/>
                )
            })}
            
            
        </div>
        </>
        
    )
}

export default ItemListContainer;