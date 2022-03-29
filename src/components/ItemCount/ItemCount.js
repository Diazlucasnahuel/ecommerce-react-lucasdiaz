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

        if (count > initial) {
            setCount(count - 1)
          };
    }

    const onAdd = () => {
        console.log(`Se agregaron ${count} productos al carrito`)
    }

    return(
        <>
        {  

            stock < 1
            ?
            <h2>Sin Stock</h2>
            :
        <div className="itemcount-container">

            <div className="count-container">
                <FontAwesomeIcon icon={faCircleMinus} onClick={removeProduct}></FontAwesomeIcon>
                <p>Cantidad: {count}</p>
                <FontAwesomeIcon icon={faCirclePlus} onClick={addProduct}></FontAwesomeIcon>
            </div>
            <div className="add-itemcount">
                <Button variant="outlined" onClick={onAdd}>Agregar</Button>
            </div>

        </div>
            
            
        }
        </>
    )
    
    


}

export default ItemCount