import React from "react";
import Product from "./Product";
import { useState } from 'react';
import '../App.css';


export default function Main(props) {
    const {NewP, OnAdd } = props;

    return (
        <main className="block col-2" >
            <div className="row">
                 <Product
                     id={"code: " + props.NewP.id}
                    image={props.NewP.image}
                    name={props.NewP.name}
                    price={props.NewP.price} />
            </div>
                <div className="">
                <button onClick={() => OnAdd(NewP)} id="addCart">Add To Cart</button>
                </div>
            
        </main>
    );
}



