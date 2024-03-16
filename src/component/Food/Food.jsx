import PropTypes from 'prop-types';
import './Food.css'

const Food = ({food}) => {
    const {recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = food;
    return (
            <div className='my-3'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure>
                        <img src={recipe_image} alt="Food" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{recipe_name}</h2>
                        <p className='text-gray-500'>{short_description}</p>
                        <hr className="hr-line" />
                        <p className='font-bold -mt-3'>Ingredients: {ingredients.length}</p>
                        <ul className='-mt-4 text-gray-500'>
                            {ingredients.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <hr className="hr-line" />
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-2'>
                                <img src="https://i.postimg.cc/CLKkbCC8/clock.png" alt="" />
                                <p>{preparing_time}</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <img src="https://i.postimg.cc/qRL63gzQ/Vector.png" alt="" />
                                <p>{calories}</p>
                            </div>
                        </div>
                        <div className="card-actions">
                            <button className="btn px-6 text-lg bg-[#0BE58A] rounded-full border-none">Want to Cook</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

Food.propTypes = {
    food: PropTypes.object.isRequired
}
export default Food;