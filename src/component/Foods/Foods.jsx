import { useEffect, useState } from "react";

const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() =>{
        fetch('Recipes.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h1>Foods: {foods.length}</h1>
        </div>
    );
};

export default Foods;