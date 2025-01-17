import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res => res.json())
        .then(data =>setCategories(data))
        .catch(error =>console.log(error))
    } ,[])




    return (
        <div>
            <h4>all categories</h4>
            {
                categories.map(category => <p
                key={category.id}
                >
                    <Link to={`/categories/${category.id}`}> {category.name}</Link>

                </p> )
            }
        </div>
    );
};

export default LeftSide;