import React, { useState } from 'react';
import Data from '../Data';
import './ProductList.css';

const ProductList = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchCategory, setSearchCategory] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const handleChangeValue = (event) => setSearchValue(event.target.value);
    const handleChangeCategory = (event) => setSearchCategory(event.target.value);

    const renderProducts = (arr) => arr.map(el => {
        return <div key={el.id} className="item">
            <h3>{el.name}</h3>
            <p>{el.price}</p>
            <p>{el.content}</p>
        </div>
    });
    const filterProducts = (event) => {
        event.preventDefault();
        setSearchResult(Data.filter(el => el.name.toLowerCase().includes(searchValue.toLowerCase()))
            .filter(el => {
                if (!searchCategory) {
                    return el;
                } else {
                    return el.categoryId === Number(searchCategory);
                }
            }));
    };

    return (
        <div className="container">
            <h2>Our products:</h2>
            <form onSubmit={filterProducts}>
                <label htmlFor="name">name: </label>
                <input id="name" name="name" type="text" value={searchValue} onChange={handleChangeValue}></input>
                <br />
                <br />
                <label htmlFor="category">category: </label>
                <select id="category" name="category" value={searchCategory} onChange={handleChangeCategory}>
                    <option value="">wszystkie</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
                <br />
                <br />
                <input type="submit" value="search"></input>
            </form>
            {searchValue === "" ? renderProducts(Data) : renderProducts(searchResult)}
        </div>
    );
};

export default ProductList;