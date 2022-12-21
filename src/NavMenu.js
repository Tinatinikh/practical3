import React from "react";
import shopping from "./img/shopping.png";
import favorite from "./img/favorite.png";
import account from "./img/account.png";
import shop from "./img/shop.png";

function NavMenu () {
    return (
        <div className="navitem">
           <nav className="navmenu">
            <div className="div-one">
                <li> <img  className ="picshop" src={shop} /></li>
                <li>მთავარი</li>
                <li>ქალი</li>
                <li>მამაკაცი</li>
                <li>ბავშვი</li>
                <li>კონტაქტი</li>                
          
            </div>
            <div className="div-two">
                <img className="pics" src={shopping} />
                <img  className ="pics" src={favorite} />
                <img  className ="pics" src={account} />
               
                </div>
          
           </nav>
        </div>
    )
}

export default NavMenu