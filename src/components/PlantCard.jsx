import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function PlantCard({ plant }) {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  const inCart = cart.some(item => item.id === plant.id);

  const handleAdd = () => {
    dispatch(addToCart(plant));
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: '10px',
      width: '200px',
      textAlign: 'center'
    }}>
      <img src={plant.image} alt={plant.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      <h3>{plant.name}</h3>
      <p>${plant.price}</p>
      <p style={{ fontStyle: 'italic' }}>{plant.category}</p>
      <button 
        onClick={handleAdd} 
        disabled={inCart}
        style={{ padding: '8px 16px', backgroundColor: inCart ? 'gray' : 'green', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        {inCart ? 'In Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default PlantCard;
