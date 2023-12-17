
import PropTypes from 'prop-types';

const Cart = ({ products }) => {
    const { name, age, id } = products
    return (
        <div className='mx-auto  bg-purple-500 p-10 text-center text-3xl space-y-3 text-white w-full'>
            <h2 className='text-5xl font-bold'>{name}</h2>
            <h2>{age}</h2>
            <h2>{id}</h2>
            <button className='btn btn-outline text-white w-full  mt-5'>Add To Cart</button>
        </div>
    );
};

Cart.propTypes = {
    products: PropTypes.object
};

export default Cart;