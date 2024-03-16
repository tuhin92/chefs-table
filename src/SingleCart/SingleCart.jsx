import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SingleCart = ({ singlecart, onCook }) => {
    const { recipe_name, preparing_time, calories } = singlecart;
    const [isCooking, setIsCooking] = useState(false);

    const handleCook = () => {
        setIsCooking(true);
        onCook(singlecart);
    };

    return (
        <div>
            {!isCooking && (
                <table className="w-full">
                    <tbody>
                        <tr className='text-[#7c7b7b]'>
                            <td></td>
                            <td>{recipe_name}</td>
                            <td className=''>{preparing_time}</td>
                            <td className=''>{calories}</td>
                            <td>
                                <button className="btn bg-[#0BE58A] rounded-full text-black" onClick={handleCook}>Preparing</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

SingleCart.propTypes = {
    singlecart: PropTypes.object,
    onCook: PropTypes.func.isRequired
};

export default SingleCart;
