import PropTypes from 'prop-types';

const Food = ({food}) => {
    console.log(food);
    return (
        <div>
            
        </div>
    );
};

Food.propTypes = {
    food: PropTypes.object.isRequired
}
export default Food;