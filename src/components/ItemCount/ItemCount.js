import React,{useState} from 'react'
import './ItemCount.css'
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from '@mui/material/Button';

function ItemCount ({stock, initial}) {

    const[count, setCount] = useState(initial)

    const addProduct = () =>{
        if(count < stock){

            setCount(count + 1)

        }
    }

    const removeProduct = () =>{

            setCount(count - 1)

    }

    const onAdd = () => {
        console.log(`Se agregaron ${count} productos al carrito`)
    }

    return(
        <>  
        <div className="itemcount-container">

            <div className="count-container">
                <FontAwesomeIcon icon={faCircleMinus} onClick={removeProduct}></FontAwesomeIcon>
                <p>Productos agregados: {count}</p>
                <FontAwesomeIcon icon={faCirclePlus} onClick={addProduct}></FontAwesomeIcon>
            </div>
            <div className="add-itemcount">
                <Button variant="outlined" onClick={onAdd}>Agregar</Button>
            </div>

        </div>
            
            
            
        </>
    )
    
    


}

export default ItemCount