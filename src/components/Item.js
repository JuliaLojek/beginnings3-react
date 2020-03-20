import React, {useState} from 'react';
import './Item.css';

const Item = (props) => {
    const [visibility, setVisibility] = useState(false);

    return (
    <div className="item">
        <h3 onClick={() => setVisibility(!visibility)}>{props.title}</h3>
        {visibility ? <p className="desc visible">{props.description}</p> : <p className="desc">{props.description}</p>}
    </div>
    );
};

export default Item;