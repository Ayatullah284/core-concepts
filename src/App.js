import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Ayatullah';
  const style = {
    color: 'green',
    backgroundColor: 'white'
  }
  const boktas = ['Shayk Ahmadullah', 'Mizanur Rahman Azhari', 'Allama Delewar Hosaen Saydi', 'Shaykul Hades Allama Azizul Haque', 'Tareq Monowr', 'Amir Hamza', 'Abu Tuha Adnan', 'Khairul Islam']
  const title = ['Mofasser', 'Mohaddes', 'Mofti']
  const products = [
    { name: 'Laptop', price: '$200' },
    { name: 'Phone', price: '$100' },
    { name: 'Drase', price: '$50' },
  ]
  const productNames = products.map(product => product.name);
  console.log(productNames);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done <code>src/App.js</code> and save to reload.
        </p>



        <Counter></Counter>
        <Users></Users>
        <h1 className='' style={style}>My Heading: {name}</h1>
        <ul>
          {
            boktas.map(bokta => <li>{bokta}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        <p>My first paragraph</p>
        {
          products.map(product => <Products product={product}>
          </Products>)
        }
        <Products name={products[0].name} price={products[0].price}></Products>
        <Products name={products[1].name} price={products[1].price}></Products>
        <Products name={products[2].name} price={products[2].price}></Products>

        <Persone name='Allama Azizul Haque' job={title[1]}></Persone>
        <Persone name='Allama Delewor Hossain Saydi' job={title[0]}></Persone>
        <Persone name={boktas[0]} job={title[2]}></Persone>
        <Persone name={boktas[1]} job={title[0]}></Persone>
      </header>
    </div >
  );
}












function Counter(props) {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <dir>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>
    </dir>
  )
}


function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>

    </div>
  )
}


function Products(props) {
  const ProductStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    widht: '600px',
    float: 'left'
  }

  return (
    <div style={ProductStyle} >
      <h3>{props.name}</h3>
      <h5>{props.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}


function Persone(props) {
  const PersoneStyle = {
    border: '2px solid yellow',
    margin: '10px',
    width: '850px'
  }
  return (
    <div style={PersoneStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Job: {props.job}</h3>
    </div >
  )
}

export default App;
