import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const cart = useSelector(state => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header style={{
      backgroundColor: '#2e7d32',
      padding: '10px 20px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'white'
    }}>
      <h1 style={{ margin: 0 }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>GreenNest</Link></h1>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link>
        <Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>
          🛒 Cart ({totalItems})
        </Link>
      </nav>
    </header>
  );
}

export default Header;
