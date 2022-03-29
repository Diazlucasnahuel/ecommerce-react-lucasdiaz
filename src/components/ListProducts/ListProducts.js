import React,{useState, useEffect} from 'react'
import './ListProducts.css'
import Card from '../Card/Card'

const ListProducts = ({children}) => {
    const mockProductos = [{
        id: 1,
        image: 'lg75hz.png',
        title: 'Monitor LG 75hz',
        price: 45000,
        stock: 20
    },
    {
        id: 2,
        image: 'benq144hz.png',
        title: 'Monitor BenQ 144hz',
        price: 60000,
        stock: 15
    },
    {
        id: 3,
        image: 'vs240hz.png',
        title: 'Monitor VS 240hz',
        price: 110000,
        stock: 10
    }
]

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

export default ListProducts;