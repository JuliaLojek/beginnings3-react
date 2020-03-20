import React from 'react';
import FAQList from '../DataFAQ';
import Item from '../components/Item';

const FAQ = () => {
    return FAQList.map(el => {
        return (
            <Item 
                title = {el.title}
                description = {el.description}
                key = {el.title}
            />
        );
    });
};

export default FAQ;