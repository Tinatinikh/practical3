import { useEffect, useRef, useState } from "react";
import apiRequests from "./apiRequests"
import{useQuery} from "react-query";

function Cart(){
    const [produqtebi, setProduqtebi] = useState([])

    const {data} = useQuery("products",()=>   apiRequests('GET', "products"))  
    
    console.log(data);
    
    useEffect(() =>{
        if(data){
            setProduqtebi(data)
        }
    },[data])


    return <div  className="products">
        
        {
        produqtebi.map(item =>( 
            <div key={item.id}  className="div-items"> 
               <img src={item.image}></img>
               <h4>{item.title}</h4>
               <p>{item.description}  </p> 
               <h4>{item.price}</h4>          
       
            </div>   
        ))
        }
        
        
    </div>
}

export default Cart;

