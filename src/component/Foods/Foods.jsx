import { useEffect, useState } from "react";
import Food from "../Food/Food";

const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() =>{
        fetch('Recipes.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])

    return (
        <div className="md:w-2/3">
            {/* <h1>Foods: {foods.length}</h1> */}
            {
                foods.map(food => <Food 
                    key={food.recipe_id} 
                    food={food}
                    ></Food>)
            }
        </div>
    );
};

export default Foods;