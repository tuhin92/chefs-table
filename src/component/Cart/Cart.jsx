import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import SingleCart from "../../SingleCart/SingleCart";

const Cart = ({ cart }) => {
    const [currentlyCooking, setCurrentlyCooking] = useState([]);
    const [wantToCookCount, setWantToCookCount] = useState(cart.length);

    useEffect(() => {
        console.log("Cart length changed:", cart.length);
        setWantToCookCount(cart.length - currentlyCooking.length); // Recalculate wantToCookCount based on remaining items
    }, [cart, currentlyCooking]);

    const handleCook = (recipe) => {
        setCurrentlyCooking(prevCooking => [...prevCooking, recipe]);
    };

    const handleFinishCooking = (recipe) => {
        // Handle finishing cooking
    };

    return (
        <div className="md:h-1/3 mt-3 ">
            <div className="card bg-base-100 shadow-xl">
                <div className="p-16">
                    <h2 className="text-center">Want to cook: {wantToCookCount}</h2>
                    <hr className="hr-line" />
                    <table className="text-center w-full">
                        <thead className="text-[#878787]">
                            <tr>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                                <th className="text-white">Current</th>
                            </tr>
                        </thead>
                    </table>

                    {cart.map(singlecart => (
                        <SingleCart
                            key={singlecart.id}
                            singlecart={singlecart}
                            onCook={handleCook}
                            onFinishCooking={handleFinishCooking}
                        />
                    ))}
                </div>

                <div>
                    <h2 className="text-center">Currently cooking: {currentlyCooking.length}</h2>
                    <hr className="hr-line" />
                    <table className="text-center w-full">
                        <tbody>
                            {currentlyCooking.map((recipe, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{recipe.recipe_name}</td>
                                    <td>{recipe.preparing_time}</td>
                                    <td>{recipe.calories}</td>
                                    {/* <td>
                                        <button onClick={() => handleFinishCooking(recipe)}>Finish</button>
                                    </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array
}
export default Cart;
