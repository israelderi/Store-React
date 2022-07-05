import React, {useState} from 'react'
import '../App.css';
import swal from 'sweetalert';

export default function AddNewProduct(props) {
  const [name, setname] = useState('');
  const [id, setid] = useState('');
    const [price, setprice] = useState(0);
    
    function handleChangeName(event) {
      let input = event.target.value;
      if(input.length > 2 && isNaN(input)) {
          setname(input)
      } else {
        setname('')
      }
  }
  function handleChangePrice(event) {
    let input = event.target.value;
    if(input > 0) {
        setprice(Number(input))
    } else {
        setprice(0)
    }
}
function handleChangeId(event) {
  let input = event.target.value;
  if(input > 0) {
    setid(input)
  } else {
    setid('')
  }
}
let addProduct = () => {
  if(name != '' && price > 0 && id > 0) {
      props.addProductFn(id, name, price)
      swal("Good job!", "Product added successfully 👍 ", "success");
  } else {
    swal("Oops!", "Something went wrong! 👎", "error");
  }
}
  return (
    <div className=''>
      <h4>Add New products</h4>
        <input type="text" className='InpAdd' onChange={handleChangeName} placeholder ='Add Product Name ' name='AddName' />
        <input type="text" className='InpAdd' onChange={handleChangeId} placeholder ='Add Product id' name='Addid' />
        <input type="text" className='InpAdd' onChange={handleChangePrice} placeholder ='Add Product Price ' name='AddPrice' />
        <button onClick={addProduct} className='butAddNew'>Add New</button>
      
    </div>
  )
}