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
            <div key={item.id}  > 
               {item.title+ " "+ item.description+ " " + item.price}
               <img src={item.image}></img>
       
            </div>   
        ))
        }
        
        
    </div>
}

export default Cart;

