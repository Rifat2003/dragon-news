import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div>
            <h2 className="font-bold text-xl">All Category {categories.length}</h2>

            {
            categories.map(category => <NavLink className="flex mt-8 flex-row ml-4 text-lg font-semibold" key={category.id} to={`/category/${category.id}`}>{category.name}</NavLink>)
        }
        </div>
        
    );
};

export default LeftSideNav;