import React from "react";
import shopping from "./img/shopping.png";
import favorite from "./img/favorite.png";
import account from "./img/account.png";
import shop from "./img/shop.png";

function NavMenu () {
    return (
        <div className="navitem">
           <nav className="navmenu">
            <ul>
                <li>მთავარი</li>
                <li>ქალი</li>
                <li>მამაკაცი</li>
                <li>ბავშვი</li>
                <li>კონტაქტი</li>
                
            </ul>
            <img className="picshopping" src={shopping} />
            <img  className ="picfavorite" src={favorite} />
            <img  className ="picaccount" src={account} />
            <img  className ="picshop" src={shop} />
           </nav>
        </div>
    )
}

export default NavMenu