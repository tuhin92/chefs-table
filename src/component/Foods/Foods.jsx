import { useEffect, useState } from "react";

const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() =>{
        fetch('Recipes.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])

    return (
        <div>
            
        </div>
    );
};

export default Foods;