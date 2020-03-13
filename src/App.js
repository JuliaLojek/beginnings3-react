import React from 'react';
import './App.css';
import ItemList from './ItemList';
import ProductList from './ProductList';

const list = [{
  title: "Important question 1",
  description: "Very long description about the answet to the very important question 1"
},
{
  title: "Important question 2",
  description: "Very long description about the answet to the very important question 2"
},
{
  title: "Important question 3",
  description: "Very long description about the answet to the very important question 3"
},
{
  title: "Important question 4",
  description: "Very long description about the answet to the very important question 4"
},
{
  title: "Important question 5",
  description: "Very long description about the answet to the very important question 5"
},
{
  title: "Important question 6",
  description: "Very long description about the answet to the very important question 6"
}];

function App() {
  return (
    <div className="App">
      <ProductList />
      <ItemList 
        list = {list}
      />
    </div>
  );
}

export default App;
