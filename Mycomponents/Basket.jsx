import React from 'react';
import '../App.css';

export default function Basket(props) {
    const { CartItems, OnAdd, OnRemove } = props;
    const itemsPrice = CartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice >2000 ? 0 : 50;
    const totalPrice = itemsPrice + shippingPrice;

    return (
        <aside className='block col-1'>
            <h2 id='titelCart'>Cart Items 🛒</h2>
            <div>{CartItems.length === 0 && <div>Cart Is Empty</div>}</div>
            {CartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="col-2">{item.name}</div>
                    <div className="col-2">
                        <button onClick={()=>OnAdd(item)} className="ButAdd"><strong>+</strong></button><> </>
                        <button onClick={()=>OnRemove(item)} className="ButRemove"><strong>-</strong></button>
                    </div>
                    <div classNam="col-2">
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                </div>
            ))}
          {CartItems.length !== 0 &&(
              <>
              <hr></hr>
              <div className="row cart">
                 <div className="col-2">Items Price -</div>
                 <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
              </div>
              <div className="row cart">
                 <div className="col-2">Shipping -</div>
                 <div className="col-1 text-right">${shippingPrice.toFixed(2)}</div>
              </div>
              <div className="row cart">
                 <div className="col-2"><strong>Total Price -</strong></div>
                 <div className="col-1 text-right"><strong> ${totalPrice.toFixed(2)}</strong></div>
              </div>
              <hr  />
              <div className="">
                 <button className="pay center"><strong>payment</strong></button>
              </div>
            </>
          )}
        </aside>

    );
}
