import './ListProducts.css'
import Card from '../Card/Card'

const ListProducts = ({children}) => {
    return(
        <div className="container-cards">
            <h2>{children}</h2>
            
            <div className="cards">
                <Card title='Monitor LG 75hz IPS LED' price={45000}/>
                <Card title='Teclado HyperX Alloy FPS' price={15000}/>
                <Card title='Mouse Logitech Pro' price={6000}/>
            </div>
            
        </div>
    )
}

export default ListProducts;