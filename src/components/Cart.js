import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    // Calculate total price
    const totalPrice = cartItems.reduce((total, item) => {
        const price = item.card.info.price || item.card.info.defaultPrice || 0;
        return total + (price / 100);
    }, 0);

    return (
        <div className='min-h-screen bg-gray-50'>
            <div className='max-w-4xl mx-auto p-6'>
                {/* Header */}
                <div className='bg-white rounded-lg shadow-md p-6 mb-6'>
                    <h1 className='text-3xl font-bold text-gray-800 text-center mb-2'>
                        🛒 Your Cart
                    </h1>
                    <p className='text-gray-600 text-center'>
                        {cartItems.length === 0 
                            ? "Your cart is empty" 
                            : `${cartItems.length} item${cartItems.length > 1 ? 's' : ''} in your cart`
                        }
                    </p>
                </div>

                {cartItems.length === 0 ? (
                    /* Empty Cart State */
                    <div className='bg-white rounded-lg shadow-md p-12 text-center'>
                        <div className='text-6xl mb-4'>🍽️</div>
                        <h2 className='text-2xl font-semibold text-gray-700 mb-2'>
                            Your cart is empty
                        </h2>
                        <p className='text-gray-500 mb-6'>
                            Add some delicious items to get started!
                        </p>
                        <button 
                            onClick={() => window.history.back()}
                            className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200'
                        >
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    /* Cart Items */
                    <div className='space-y-6'>
                        <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                            <div className='p-4 bg-gray-50 border-b'>
                                <h2 className='text-xl font-semibold text-gray-800'>Order Items</h2>
                            </div>
                            <ItemList items={cartItems} />
                        </div>

                        {/* Order Summary */}
                        <div className='bg-white rounded-lg shadow-md p-6'>
                            <h3 className='text-xl font-semibold text-gray-800 mb-4'>Order Summary</h3>
                            <div className='space-y-2 mb-4'>
                                <div className='flex justify-between text-gray-600'>
                                    <span>Subtotal ({cartItems.length} items)</span>
                                    <span>₹{totalPrice.toFixed(2)}</span>
                                </div>
                                <div className='flex justify-between text-gray-600'>
                                    <span>Delivery Fee</span>
                                    <span>₹40.00</span>
                                </div>
                                <div className='flex justify-between text-gray-600'>
                                    <span>Taxes & Fees</span>
                                    <span>₹{(totalPrice * 0.05).toFixed(2)}</span>
                                </div>
                                <hr className='my-2' />
                                <div className='flex justify-between text-lg font-bold text-gray-800'>
                                    <span>Total</span>
                                    <span>₹{(totalPrice + 40 + (totalPrice * 0.05)).toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className='flex gap-4 mt-6'>
                                <button 
                                    onClick={handleClearCart}
                                    className='flex-1 bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2'
                                >
                                    🗑️ Clear Cart
                                </button>
                                <button 
                                    className='flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2'
                                >
                                    💳 Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart
