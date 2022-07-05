import React from 'react';
import Header from './Mycomponents/Header';
import AddNewP from './Mycomponents/AddNewP';
import Main from './Mycomponents/Main';
import Basket from './Mycomponents/Basket';
import { useState } from 'react';
import './App.css';
import swal from 'sweetalert';

const data = [
  {
    id: 1,
    image: <img src={require('./iPhone-13.png')} />,
    name: "ipohne 13",
    price: 1099
  },
  {
    id: 2,
    image: <img src={require('./macbook air.png')} />,
    name: "Macbook Air",
    price: 1299
  },
  {
    id: 3,
    image: <img src={require('./macbook pro.png')} />,
    name: "Macbook Pro",
    price: 2099
  },

]


function App() {
  const [NewProducts, setNewP] = useState(data)
  const addProductFn = (id, name, price) => setNewP([...NewProducts, {id :id, image: 0, name: name, price: price }])

  const { products } = data;
  //add cart
  const [CartItems, setCartItems] = useState([]);
  const OnAdd = (NewP) => {
    const exist = CartItems.find((x) => x.id === NewP.id);
    if (exist) {
      setCartItems(
        CartItems.map((x) =>
          x.id === NewP.id ? { ...exist, qty: exist.qty + 1 } : x)
      );
    } else {
      setCartItems([...CartItems, { ...NewP, qty: 1 }])
    }
  };
  const OnRemove = (NewP) => {
    const exist = CartItems.find((x) => x.id === NewP.id);
    if (exist.qty === 1) {
      setCartItems(CartItems.filter((x) => x.id !== NewP.id));
    } else {
      setCartItems(
        CartItems.map((x) =>
          x.id === NewP.id ? { ...exist, qty: exist.qty - 1 } : x)
      );
    }
  }

  return (
    <div className="App">
      <Header countItems={CartItems.length} />
      <div className=' block'>
        <AddNewP addProductFn={addProductFn} />
      </div>
      <div className='row'>
        {NewProducts.map(s => {
          return  <Main NewP={s} OnAdd={OnAdd} addProductFn={addProductFn} />

        })}
        <div className='row'><Basket OnAdd={OnAdd} OnRemove={OnRemove} CartItems={CartItems}> </Basket></div>
      </div>
      

      <h1><img id="logo" src="https://i0.wp.com/traxzee.com/wp-content/uploads/2020/09/Traxzee.Com-Minimal-HD-Wallpapers-043-1080X1920.jpg?fit=768%2C1365&ssl=1&is-pending-load=1" alt="" /></h1>

    </div>
  );
}

export default App;
