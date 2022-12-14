import { useEffect, useRef, useState } from "react";
import apiRequests from "./apiRequests"
import useRequest from "./hooks/useRequest";

function Cart(){
    const [produqtebi, setProduqtebi] = useState([])
    const [value, setValue] = useState('')
    const inputRef = useRef()  

    const [data] = apiRequests('GET', "https://fakestoreapi.com/products")  
    
    console.log(data);
    
    useEffect(() =>{
        if(data){
            setProduqtebi(data)
        }
    },[data])

    useEffect(() =>{
        inputRef.current.focus();
    }, [])


    return <div  className="products">
        <ul>
        {
        produqtebi.map(item =>( 
            <li key={item.id}  > 
               {item.title+ " "+ item.description+ " " + item.price}
               <img src={item.image}></img>
       
            </li>   
        ))
        }
        </ul>
        
    </div>
}

export default Cart;

