import React from 'react';
import Item from './Item';

const ItemList = (props) => {
    return props.list.map(el => {
        return (
            <Item 
                title = {el.title}
                description = {el.description}
                key = {el.title}
            />
        );
    });
};

export default ItemList;