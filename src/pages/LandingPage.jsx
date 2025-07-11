import { Link } from 'react-router-dom';
import './Landing.css'; // create style if needed
import "./Landing.css"; // Remove this line if you're not using styles yet


function LandingPage() {
  return (
    <div className="landing" style={{
      backgroundImage: 'url(/assets/bg.jpg)',
      backgroundSize: 'cover',
      height: '100vh',
      color: 'white',
      textAlign: 'center',
      paddingTop: '10%'
    }}>
      <h1>GreenNest</h1>
      <p>Your one-stop shop for beautiful indoor houseplants.</p>
      <Link to="/products">
        <button style={{ padding: '10px 20px', fontSize: '18px' }}>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
