import products from '../../public/products.json'
import Cart from './cart';


const Products = () => {
    return (
        <div className='mt-20'>
            <div className="grid grid-cols-3 items-center gap-20">
                {
                    products.map((i) => <Cart key={i.id} products={i}></Cart>)
                }
            </div>


        </div>
    );
};

export default Products;