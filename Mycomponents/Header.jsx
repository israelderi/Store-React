import React from "react";
import '../App.css';


 export default function Header (props) {
     const  {countItems} = props;
    return (
        <div>
            <header className="row block center">
                <div>
                    <a href="#/">
                        <h1>Apple Product Store  </h1>
                    </a>
                </div>
                <div>
                    <a href="#/cart">Cart 🛒 {' '} 
                    {countItems ? (
                        <button className="badge">{countItems}</button>
                    ) : (
                     ''
                    )}
                    </a>{' '}
                </div>
            </header>
        </div>

    );

}