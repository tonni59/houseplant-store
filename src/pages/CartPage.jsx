import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, remove } from '../redux/cartSlice';
import { Link } from 'react-router-dom';

function CartPage() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <p><strong>Total Items:</strong> {totalItems}</p>
          <p><strong>Total Cost:</strong> ${totalCost}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {cart.map(item => (
              <div key={item.id} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <img src={item.image} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px' }} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>${item.price} each</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <button onClick={() => dispatch(decrease(item.id))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increase(item.id))}>+</button>
                  <button onClick={() => dispatch(remove(item.id))} style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '30px', display: 'flex', gap: '20px' }}>
            <Link to="/products">
              <button style={{ padding: '10px 20px' }}>Continue Shopping</button>
            </Link>
            <button onClick={() => alert("Checkout feature coming soon!")} style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white' }}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
