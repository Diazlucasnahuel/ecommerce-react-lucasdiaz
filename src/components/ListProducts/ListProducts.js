import './ListProducts.css'
import Card from '../Card/Card'

const ListProducts = ({children}) => {
    let dataProduct = {
        title: 'Monitor LG 75hz IPS LED',
        price: 45000,
        stock: 10
    }
    return(
        <div className="container-cards">
            <h2>{children}</h2>
            
            <div className="cards">
                <Card data={dataProduct}/>
            </div>
            
        </div>
    )
}

export default ListProducts;