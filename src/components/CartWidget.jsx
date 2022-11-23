import { FiShoppingCart } from 'react-icons/fi';

const CartWidget = () => {
    return (
        <>
            <div className="cart-widget">
                <a href="" className="cart"><FiShoppingCart size="35" /></a>
                <div className="qty-display">5</div>
            </div>
        </>
    )
}

export default CartWidget