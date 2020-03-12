import React, { useState, useEffect } from 'react';

const List = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(data => data.json())
            .then(data => setPostList(data))
    }, []);

    return (
        <div>
            {postList.map(el => {
                return <div>{el.title}</div>
            }
            )}
        </div>
    )
};

export default List;